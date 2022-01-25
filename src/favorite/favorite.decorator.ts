import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';
import { Game } from 'src/game/game.entity';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

export function IsNotEmptyFavoriteList(validationOptions?: ValidationOptions) {
  return function (createFavoriteDto: CreateFavoriteDto, propertyName: string) {
    registerDecorator({
      name: 'IsNotEmptyFavoriteList',
      target: createFavoriteDto.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(games: Game[], args: ValidationArguments): boolean {
          return games.length > 0;
        },
      },
    });
  };
}
