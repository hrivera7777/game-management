import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from './../role.enum';
import { User } from './user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: UserRole;
  @Column()
  description: string;
  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
