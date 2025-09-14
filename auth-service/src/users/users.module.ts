import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from 'src/entities/users.entity';
import { UserToken } from 'src/entities/token.entity';
import { AuthModule } from 'src/auth/auth.module'; // ⚡ імпорт AuthModule

@Module({
  imports: [TypeOrmModule.forFeature([Users, UserToken]), AuthModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
