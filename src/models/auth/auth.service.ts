import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import Hash from '../../common/facades/Hash';
import { User } from '../../models/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user && Hash.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async validateHashedEmail(user: User, hashed: string): Promise<boolean> {
    return user && Hash.compare(user.email, hashed, 'md5');
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id, name: user.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  generateUserSecretToken(user: User): string {
    return Hash.hash(user.email + user.name, 'md5');
  }
}
