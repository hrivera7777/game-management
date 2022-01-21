import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Game } from 'src/game/game.entity';
export class CreateFavoriteDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  description: string;
  @IsNotEmpty()
  games: Game[];
}
