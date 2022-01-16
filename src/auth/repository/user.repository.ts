import { EntityRepository, Repository } from 'typeorm';
import { User } from './../entity/user.entity';
import { SignUpDto } from './../dto/signup.dto';
import { InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserRole } from './../role.enum';
import { RolesRepository } from './role.repository';
import { Role } from './../entity/role.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  @InjectRepository(RolesRepository) private rolesRepository: RolesRepository;
  async createUser(signUpDto: SignUpDto) {
    const { password } = signUpDto;
    const salt: string = await bcrypt.genSalt();
    const hashedPassword: string = await bcrypt.hash(password, salt);
    const roleName: string = UserRole.ADMIN;
    try {
      const role: Role[] = await this.rolesRepository.find();
      console.log(JSON.stringify(role));
      // const user: User = this.create({
      //   ...signUpDto,
      //   password: hashedPassword,
      //   role,
      // });
    } catch (error) {
      console.log(JSON.stringify(error));
    }
    // try {
    //   await this.save(user);
    // } catch (error) {
    //   if (error.code === '23505') {
    //     //code when the username or email exists
    //     throw new InternalServerErrorException('Unexpected error occur');
    //   }
    // }
  }
}
