import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Query,
  UnauthorizedException,
  Res,
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
  async getToken(@Request() req, @Query('candidato') hashedEmail: string) {
    const user: User = req.user;
    const hashOk = await this.authService.validateHashedEmail(
      user,
      hashedEmail,
    );
    if (hashOk) {
      const token = this.authService.generateUserSecretToken(user);
      return { token: token };
    }

    throw new UnauthorizedException();
  }

  @UseGuards(JwtAuthGuard)
  @Get('pegaJson')
  async getJson(@Request() req, @Query('candidato') token: string, @Res() res) {
    const user: User = req.user;
    const hashOk = await this.authService.validateUserSuperSecretToken(
      user,
      token,
    );
    if (hashOk) {
      return res.redirect('/vehicles');
    }

    throw new UnauthorizedException();
  }
}
