import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesModule } from './models/vehicles/vehicles.module';
import { AuthModule } from './models/auth/auth.module';
import { AuthService } from './models/auth/auth.service';
import { UsersModule } from './models/users/users.module';
import config = require("../ormconfig");

@Module({
  imports: [TypeOrmModule.forRoot(config), VehiclesModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
