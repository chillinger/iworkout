import { Controller, Get, Req, Post, Param, Body } from '@nestjs/common';
import { Request} from 'express';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { validate } from 'class-validator';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}



    @Post()
    async create(@Body() createUserDTO: CreateUserDTO) {
        return this.userService.create(createUserDTO)
    }

    @Get()
    async findAll(@Req() request: Request): Promise<User[]> {
        return this.userService.findAll();
    }

    /*@Get(':id')
    findOne(@Param('id') id): string {
        return this.users[id]
    }*/


}
