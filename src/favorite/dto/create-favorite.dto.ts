import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Game } from 'src/game/game.entity';
import { IsNotEmptyFavoriteList } from '../favorite.decorator';
export class CreateFavoriteDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsNotEmptyFavoriteList({ message: 'The array games must not be empty' })
  games: Game[];
}
