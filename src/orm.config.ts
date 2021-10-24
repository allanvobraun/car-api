import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

type TypeOrmModuleOptionsPlus = TypeOrmModuleOptions & {
    seeds?: string[];
    factories?: string[];
  };
  
const typeormOptions: TypeOrmModuleOptionsPlus = {
  synchronize: true,
  entities: ["dist/**/*.entity{.ts,.js}"],
  type: 'sqlite',
  database: path.resolve(__dirname, '..', 'src/database/database.db'),
  seeds: [ path.resolve(__dirname, '..', 'src/database/seeds/**/*{.ts,.js}') ],
  cli: {
    entitiesDir: 'src/**/*.entity.ts',
  },
};

export = typeormOptions;
