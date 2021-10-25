import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehiclesRepository: Repository<Vehicle>,
  ) {}

  findAll(): Promise<Vehicle[]> {
    return this.vehiclesRepository.find();
  }

  findOne(id: string): Promise<Vehicle | undefined> {
    return this.vehiclesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vehiclesRepository.delete(id);
  }
}
