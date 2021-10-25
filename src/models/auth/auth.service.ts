
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import Hash from '../../common/facades/Hash';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && Hash.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}