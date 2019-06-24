import {IsNotEmpty} from 'class-validator'
export class CreateUserDTO {
    @IsNotEmpty()
    readonly login: string
    @IsNotEmpty()
    readonly email: string
}