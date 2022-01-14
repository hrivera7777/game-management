import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameController } from './game.controller';
import { GamesRepository } from './game.repository';
import { GameService } from './game.service';

@Module({
  controllers: [GameController],
  imports: [TypeOrmModule.forFeature([GamesRepository])],
  providers: [GameService],
})
export class GameModule {}
