import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesRepository } from './repositories/role.repository';
import { UsersRepository } from './repositories/user.repository';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository, RolesRepository])],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
