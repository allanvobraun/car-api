import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Vehicle, VehicleType } from '../../src/vehicles/vehicle.entity';

export default class CreateVehicles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {

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
          modelo: 'belina',
          cor: 'marrom',
          ano: 1987,
          tipo_veiculo: VehicleType.CAR,
        },
      ])
      .execute();
  }
}
