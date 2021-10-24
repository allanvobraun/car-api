import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Exclude } from 'class-transformer';

export enum VehicleType {
  CAR = 'carro',
  MOTORCYCLE = 'moto',
}

@Entity()
export class Vehicle {

  @Exclude()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  marca: string;

  @Column()
  modelo: string;

  @Column()
  cor: string;

  @Column()
  ano: number;

  @Column({
    type: 'simple-enum',
    enum: VehicleType,
  })
  tipo_veiculo: VehicleType;
}
