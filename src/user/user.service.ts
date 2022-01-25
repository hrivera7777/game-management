import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpDto } from 'src/auth/dto/signup.dto';
import { Role } from './entities/role.entity';
import { User } from './entities/user.entity';
import { RolesRepository } from './repositories/role.repository';
import { UsersRepository } from './repositories/user.repository';
import { UserRole } from './role.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
    @InjectRepository(RolesRepository) private rolesRepository: RolesRepository,
  ) {}

  async createUser(signUpDto: SignUpDto): Promise<void> {
    const role: Role = await this.rolesRepository.findOne({
      name: UserRole.USER,
    });
    return this.usersRepository.createUser(signUpDto, role);
  }
  async findOne(username: string): Promise<User> {
    return await this.usersRepository.findOne({ username });
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }
}
