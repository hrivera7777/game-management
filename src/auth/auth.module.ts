import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './user.repository';
@Module({
  controllers: [AuthController],
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  providers: [AuthService],
})
export class AuthModule {}
