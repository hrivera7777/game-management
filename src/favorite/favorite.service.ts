import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(user: User, id: string): Promise<Favorite> {
    const favorite: Favorite = await this.favoritesRepository.findOne(id, {
      where: { user: user },
      relations: ['games'],
    });
    if (!favorite) {
      throw new NotFoundException(`Favorite list with id: ${id} not found`);
    }
    return favorite;
  }

  async update(
    user: User,
    id: string,
    updateFavoriteDto: UpdateFavoriteDto,
  ): Promise<Favorite> {
    const favorite: Favorite = await this.findOne(user, id);
    Object.assign(favorite, updateFavoriteDto);
    this.favoritesRepository.save(favorite);

    return favorite;
  }

  async remove(user: User, id: string): Promise<void> {
    const { affected } = await this.favoritesRepository.delete({ id, user });
    if (!affected) {
      throw new NotFoundException(`Favorite list with id: ${id} not found`);
    }
  }
}
