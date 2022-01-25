import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from 'src/game/game.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature(), GameModule, UserModule],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
