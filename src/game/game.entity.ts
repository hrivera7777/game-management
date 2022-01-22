import { Favorite } from 'src/favorite/entities/favorite.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  genre: string;
  @Column({ type: 'bigint' })
  price: number;
  @Column()
  filename: string;
  @ManyToMany(() => Favorite, (favorite) => favorite.games)
  favorites: Favorite[];
}
