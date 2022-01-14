import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { json } from 'stream/consumers';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
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
  async updateGame(id: string, updateGameDto: UpdateGameDto): Promise<Game> {
    const { affected } = await this.gamesRepository.update(id, {
      ...updateGameDto,
    });
    if (!affected) {
      throw new NotFoundException(`The game with id: ${id} not found`);
    }
    return await this.gamesRepository.findOne({ id });
  }
}
