import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty()
  name: string;
  @IsOptional()
  genre: string;
  @IsNotEmpty()
  price: string;
  @IsNotEmpty()
  fileName: string;
}
