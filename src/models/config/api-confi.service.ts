// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { isNil } from 'lodash';

// import { UserSubscriber } from '../../entity-subscribers/user-subscriber';
// import { SnakeNamingStrategy } from '../../snake-naming.strategy';

// @Injectable()
// export class ApiConfigService {
//   constructor(private configService: ConfigService) {}

//   get typeOrmConfig(): TypeOrmModuleOptions {
//     let entities = [__dirname + '/../../modules/**/*.entity{.ts,.js}'];
//     let migrations = [__dirname + '/../../database/migrations/*{.ts,.js}'];


//     return {
//       entities,
//       migrations,
//       keepConnectionAlive: !this.isTest,
//       dropSchema: this.isTest,
//       type: 'postgres',
//       host: this.getString('DB_HOST'),
//       port: this.getNumber('DB_PORT'),
//       username: this.getString('DB_USERNAME'),
//       password: this.getString('DB_PASSWORD'),
//       database: this.getString('DB_DATABASE'),
//       subscribers: [UserSubscriber],
//       migrationsRun: true,
//       logging: this.getBoolean('ENABLE_ORM_LOGS'),
//       namingStrategy: new SnakeNamingStrategy(),
//     };
//   }
// }
