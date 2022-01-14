import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  fileName: string;
}
