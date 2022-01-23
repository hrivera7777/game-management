import { Injectable } from '@nestjs/common';
import { Game } from 'src/game/game.entity';
import { GameService } from 'src/game/game.service';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ReportService {
  constructor(
    private gameService: GameService,
    private userService: UserService,
  ) {}

  async getMostAddedGame(): Promise<Game> {
    const games = await this.gameService.getGamesWithLists();
    const mostAddedGame = games.reduce((previous, current) => {
      return previous.favorites.length > current.favorites.length
        ? previous
        : current;
    });
    return mostAddedGame;
  }

  async getUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
