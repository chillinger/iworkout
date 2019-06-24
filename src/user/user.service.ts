import { Injectable } from '@nestjs/common';
import { User } from 'src/user/interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
    private readonly users: User[] = [];
    private id = 0;

    async create(createUserDTO: CreateUserDTO) {
        const {login, email} = createUserDTO;

        const user = {
            login: login,
            email: email,
            id: this.id++
        }

        this.users.push(user);
        return user;
    }

    async findAll(): Promise<User[]>{
        return this.users;
    }


}
