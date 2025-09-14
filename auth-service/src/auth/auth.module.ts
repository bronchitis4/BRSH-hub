import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserToken } from 'src/entities/token.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserToken]), 
    JwtModule.register({
      secret: 'KEY',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
