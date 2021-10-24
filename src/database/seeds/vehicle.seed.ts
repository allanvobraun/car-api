import { Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { VehicleType, Vehicle } from '../../../dist/models/vehicles/vehicle.entity';

export default class CreateVehicles implements Seeder {
  public async run(_: any, connection: Connection): Promise<any> {
    console.log(__filename);
    console.log(__dirname);

    await connection
      .createQueryBuilder()
      .insert()
      .into(Vehicle)
      .values([
        {
          marca: 'ford',
          modelo: 'belina',
          cor: 'verde',
          ano: 1985,
          tipo_veiculo: VehicleType.CAR,
        },
        {
          marca: 'ford',
          modelo: 'belina2',
          cor: 'marrom',
          ano: 1987,
          tipo_veiculo: VehicleType.CAR,
        },
      ])
      .execute();
  }
}
