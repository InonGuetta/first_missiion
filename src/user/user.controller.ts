import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post('/create')
    async create(@Body() body){
        return await this.userService.create(body); 
    }
}
