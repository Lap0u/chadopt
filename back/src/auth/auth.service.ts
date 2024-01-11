import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { User } from 'src/users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string) {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new UnauthorizedException({ message: 'User' });
    }
    if (user.password !== pass) {
      throw new UnauthorizedException({ message: 'Password' });
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(user: User) {
    const newUser = await this.usersService.create(user);
    const payload = { sub: newUser.id, username: newUser.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
