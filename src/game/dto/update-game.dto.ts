import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateGameDto {
  @IsOptional()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  genre: string;
  @IsOptional()
  @IsNumber()
  price: string;
  @IsOptional()
  @IsString()
  fileName: string;
}
