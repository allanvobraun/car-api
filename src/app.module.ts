import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [TypeOrmModule.forRoot(), VehiclesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
