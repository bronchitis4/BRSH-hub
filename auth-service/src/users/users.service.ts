import { Injectable } from '@nestjs/common';
import { Users } from 'src/entities/users.entity';
import { UserToken } from 'src/entities/token.entity';
import { AuthService } from 'src/auth/auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
        private readonly userRepo: Repository<Users>,

        @InjectRepository(UserToken)
        private readonly tokenRepo: Repository<UserToken>,
    ) { }

    async CreateNewUser(body: any) {
        const { first_name, surname, email, password, confirmedPassword } = body;
        const salt = 10;
        if (password !== confirmedPassword)
            return {
                statusCode: 400,
                error: "Password is not equel!",
                message: "Паролі не співпадають!",
                isSuccessful: false
            }

        const isExisting = await this.userRepo.findOne({ where: { email } });
        if (!isExisting) {
            const password_hash = await bcrypt.hash(password, salt)
            try {
                const newUser = await this.userRepo.create(
                {
                    first_name,
                    surname,
                    email,
                    password_hash,
                })
                await this.userRepo.save(newUser);

                return ({
                    data: newUser,
                    statusCode: 200,
                    message: "Запис створено!",
                    isSuccessful: true
                });

            } catch (error) {
                return ({
                    statusCode: 400,
                    error,
                    message: "Помилка при створенні запису!",
                    isSuccessful: false
                });
            }
        } else {
            return {
                statusCode: 400,
                error: "Accont already registrated!",
                message: "Профіль за даною поштою вже зареєстрований!",
                isSuccessful: false
            }
        }
    }

    async GetAllUsers() {
        return await this.userRepo.find();
    }
}
