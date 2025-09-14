import { Body, Controller, Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @Post()
    async CreateNewUsers(@Body() body: any) {
        return await this.usersService.CreateNewUser(body)
    }

    @Get()
    async GetAllUsers() {
        return await this.usersService.GetAllUsers();
    }
}
