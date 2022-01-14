import { EntityRepository, Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './game.entity';

@EntityRepository(Game)
export class GamesRepository extends Repository<Game> {
  async createGame(createGameDto: CreateGameDto) {
    const game = this.create({
      ...createGameDto,
    });
    await this.save(game);
    return game;
  }
}
