import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register({ secret: '1234', signOptions: { expiresIn: 3600 } }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    UserModule,
  ],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
