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
import { UserRole } from 'src/auth/role.enum';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './game.entity';
import { GameService } from './game.service';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('game')
@UseGuards(RolesGuard)
export class GameController {
  constructor(private gamesService: GameService) {}
  @Roles(UserRole.ADMIN)
  @Post()
  createGame(@Body() createGameDto: CreateGameDto): Promise<Game> {
    return this.gamesService.createGame(createGameDto);
  }
  @Get()
  getGames(): Promise<Game[]> {
    return this.gamesService.getGames();
  }

  @Roles(UserRole.ADMIN)
  @Patch(':id')
  updateGame(
    @Param('id') id: string,
    @Body() updateGameDto: UpdateGameDto,
  ): Promise<Game> {
    return this.gamesService.updateGame(id, updateGameDto);
  }
  @Roles(UserRole.ADMIN)
  @Delete(':id')
  deleteGame(@Param('id') id: string): Promise<void> {
    return this.gamesService.deleteGame(id);
  }
}
