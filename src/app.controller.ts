import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { LocalAuthGuard } from './models/auth/local-auth.guard';
import { AuthService } from 'models/auth/auth.service';
import { JwtAuthGuard } from 'models/auth/jwt-auth.guard';
import { User } from 'models/users/user.entity';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    // devolve jwt
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    // pega dados do usuario usando o token bearer
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('pegaToken')
  async getToken(@Request() req, @Query('candidato') email: string) {
    const user: User = req.user;
    const hashOk = await this.authService.validateHashedEmail(user, email);
    if (hashOk) {
      const token = this.authService.generateUserSecretToken(user);
      return { token: token };
    }

    throw new UnauthorizedException();
  }
}
