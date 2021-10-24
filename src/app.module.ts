import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesModule } from './models/vehicles/vehicles.module';
import * as typeormOptions from './orm.config';


@Module({
  imports: [TypeOrmModule.forRoot(typeormOptions), VehiclesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
