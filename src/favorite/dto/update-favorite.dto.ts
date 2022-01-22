import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Game } from 'src/game/game.entity';

export class UpdateFavoriteDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name: string;
  @IsOptional()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsOptional()
  games: Game[];
}
