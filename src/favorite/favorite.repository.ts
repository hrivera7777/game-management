import { User } from 'src/auth/entity/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { Favorite } from './entities/favorite.entity';

@EntityRepository(Favorite)
export class FavoritesRepository extends Repository<Favorite> {
  async createFavorite(
    createFavoriteDto: CreateFavoriteDto,
    user: User,
  ): Promise<Favorite> {
    const favorite = this.create({
      ...createFavoriteDto,
      user,
    });
    await this.save(favorite);
    return favorite;
  }
}
