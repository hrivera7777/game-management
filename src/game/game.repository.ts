import { EntityRepository, Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './game.entity';

@EntityRepository(Game)
export class GamesRepository extends Repository<Game> {
  async createGame(createGameDto: CreateGameDto) {
    const { name, genre, price, fileName } = createGameDto;
    const game = this.create({
      name,
      genre,
      price,
      fileName,
    });
    await this.save(game);
    return game;
  }
}
