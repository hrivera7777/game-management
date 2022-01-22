import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entity/user.entity';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { Favorite } from './entities/favorite.entity';
import { FavoritesRepository } from './favorite.repository';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(FavoritesRepository)
    private favoritesRepository: FavoritesRepository,
  ) {}
  createFavorite(
    createFavoriteDto: CreateFavoriteDto,
    user: User,
  ): Promise<Favorite> {
    return this.favoritesRepository.createFavorite(createFavoriteDto, user);
  }

  async getFavorites(user: User): Promise<Favorite[]> {
    return await this.favoritesRepository.find({ user });
  }

  findOne(id: number) {
    return `This action returns a #${id} favorite`;
  }

  update(id: number, updateFavoriteDto: UpdateFavoriteDto) {
    return `This action updates a #${id} favorite`;
  }

  remove(id: number) {
    return `This action removes a #${id} favorite`;
  }
}
