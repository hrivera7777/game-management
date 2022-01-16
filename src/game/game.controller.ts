import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './game.entity';
import { GameService } from './game.service';

@Controller('game')
@UseGuards(AuthGuard())
export class GameController {
  constructor(private gamesService: GameService) {}
  @Post()
  createGame(@Body() createGameDto: CreateGameDto): Promise<Game> {
    return this.gamesService.createGame(createGameDto);
  }
  @Get()
  getGames(): Promise<Game[]> {
    return this.gamesService.getGames();
  }

  @Patch(':id')
  updateGame(
    @Param('id') id: string,
    @Body() updateGameDto: UpdateGameDto,
  ): Promise<Game> {
    return this.gamesService.updateGame(id, updateGameDto);
  }
  @Delete(':id')
  deleteGame(@Param('id') id: string): Promise<void> {
    return this.gamesService.deleteGame(id);
  }
}
