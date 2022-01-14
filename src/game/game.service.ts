import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './game.entity';
import { GamesRepository } from './game.repository';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GamesRepository) private gamesRepository: GamesRepository,
  ) {}
  createGame(createGameDto: CreateGameDto): Promise<Game> {
    return this.gamesRepository.createGame(createGameDto);
  }
  async getGames(): Promise<Game[]> {
    return await this.gamesRepository.find();
  }
}
