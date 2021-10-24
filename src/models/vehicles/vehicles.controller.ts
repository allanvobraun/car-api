import { Controller, Get, ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { Vehicle } from './vehicle.entity';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehicleService: VehiclesService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll(): Promise<Vehicle[]> {
    return this.vehicleService.findAll();
  }
}
