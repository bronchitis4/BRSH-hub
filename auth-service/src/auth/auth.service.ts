import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserToken } from '../entities/token.entity';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(UserToken)
    private userTokenRepo: Repository<UserToken>,
  ) {}


  async createToken(user: any) {
    const payload = { email: user.email, user_id: user.id };
    const access_token = this.jwtService.sign(payload);

    const userToken = await this.userTokenRepo.create({
        token: access_token,
        user_id: user.id
    })
    await this.userTokenRepo.save(userToken);
    
    return { access_token };
  }
}
