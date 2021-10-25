import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Exclude } from 'class-transformer';

@Entity()
export class User {

  @Exclude()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
