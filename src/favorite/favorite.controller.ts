import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { AuthGuard } from '@nestjs/passport';
import { Favorite } from './entities/favorite.entity';
import { User } from 'src/auth/entity/user.entity';
import { GetUser } from 'src/auth/decorator/get-user.decorator';

@UseGuards(AuthGuard())
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  create(
    @Body() createFavoriteDto: CreateFavoriteDto,
    @GetUser() user: User,
  ): Promise<Favorite> {
    return this.favoriteService.createFavorite(createFavoriteDto, user);
  }

  @Get()
  getFavorites(@GetUser() user: User): Promise<Favorite[]> {
    return this.favoriteService.getFavorites(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoriteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFavoriteDto: UpdateFavoriteDto,
  ) {
    return this.favoriteService.update(+id, updateFavoriteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoriteService.remove(+id);
  }
}
