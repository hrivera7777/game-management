import { Game } from 'src/game/game.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role.entity';
import { Favorite } from 'src/favorite/entities/favorite.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column({ unique: true })
  username: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @ManyToMany(() => Game)
  @JoinTable()
  games: Game[];
  @ManyToOne(() => Role, (role) => role.users, { eager: true })
  role: Role;
  @OneToMany(() => Favorite, (favorite) => favorite.user)
  favorites: Favorite[];
}
