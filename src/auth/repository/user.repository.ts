import { EntityRepository, Repository } from 'typeorm';
import { User } from './../entity/user.entity';
import { SignUpDto } from './../dto/signup.dto';
import { InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Role } from './../entity/role.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(signUpDto: SignUpDto, role: Role) {
    const { password } = signUpDto;
    const salt: string = await bcrypt.genSalt();
    const hashedPassword: string = await bcrypt.hash(password, salt);
    const user: User = this.create({
      ...signUpDto,
      password: hashedPassword,
      role,
    });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        //code when the username or email exists
        throw new InternalServerErrorException('Unexpected error occur');
      }
    }
  }
}
