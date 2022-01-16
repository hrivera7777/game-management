import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty()
  name: string;
  @IsOptional()
  genre: string;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  @IsString()
  filename: string;
}
