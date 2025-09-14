import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { UserToken } from './entities/token.entity';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Users, UserToken],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Users, UserToken]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, AuthService],
})
export class AppModule { }
