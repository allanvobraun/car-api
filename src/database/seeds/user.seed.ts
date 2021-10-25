import { Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../../../src/models/users/user.entity';
import Hash from '../../common/facades/Hash';

export default class CreateUsers implements Seeder {
  public async run(_: any, connection: Connection): Promise<any> {

    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          name: "allan",
          email: "allanvobraun@gmail.com",
          password: Hash.hash('teste')
        }
      ])
      .execute();
  }
}
