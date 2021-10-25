import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

const entities = process.env.NODE_ENV == "seed" ? 'src/**/*.entity{.ts,.js}' : 'dist/**/*.entity{.ts,.js}';
const config: TypeOrmModuleOptions = {
  synchronize: true,
  type: 'sqlite',
  database: 'src/database/database.db',
  entities: [entities],
  migrations: ['src/database/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export = config;
