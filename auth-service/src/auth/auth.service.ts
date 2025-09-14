import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from '../entities/token.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        @InjectRepository(UserToken)
        private userTokenRepo: Repository<UserToken>,
    ) { }

    async createToken(user: any) {
        const payload = { email: user.email, user_id: user.id };
        const access_token = this.jwtService.sign(payload, { expiresIn: '1h' });
        const refresh_token = this.jwtService.sign(payload, { expiresIn: '30d' });

        let userToken = await this.userTokenRepo.findOne({ where: { user: { id: user.id } } });
        if (userToken) {
            userToken.token = refresh_token;
            await this.userTokenRepo.save(userToken);
        } else {
            userToken = this.userTokenRepo.create({
                token: refresh_token,
                user: user,
            });
            await this.userTokenRepo.save(userToken);
        }

        return { access_token, refresh_token };
    }

}
