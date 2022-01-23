import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Game } from 'src/game/game.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column({
    type: 'timestamp',
    default: () => 'Current_timestamp',
    onUpdate: 'Current_timestamp',
  })
  createdat: string;
  @Column({
    type: 'timestamp',
    default: () => 'Current_timestamp',
    onUpdate: 'Current_timestamp',
  })
  updatedat: string;
  @ManyToOne(() => User, (user) => user.favorites)
  user: User;
  @ManyToMany(() => Game, (game) => game.favorites)
  @JoinTable()
  games: Game[];
}
