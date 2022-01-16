import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
@Module({
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([UsersRepository]),
    JwtModule.register({ secret: '1234', signOptions: { expiresIn: 3600 } }),
  ],
  providers: [AuthService],
})
export class AuthModule {}
