import { Injectable } from '@nestjs/common';
import { Game } from 'src/game/game.entity';
import { GameService } from 'src/game/game.service';

@Injectable()
export class ReportService {
  constructor(private gameService: GameService) {}

  async getMostAddedGame(): Promise<Game> {
    const games = await this.gameService.getGamesWithLists();
    const mostAddedGame = games.reduce((previous, current) => {
      return previous.favorites.length > current.favorites.length
        ? previous
        : current;
    });
    return mostAddedGame;
  }
}
