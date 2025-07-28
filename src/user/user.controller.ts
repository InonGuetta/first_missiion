import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('create')
    async create(@Body() body) {
        return await this.userService.create(body);
    }

    @Post('login')
        async login(@Body() body){
            return this.userService.login(body)
        }
}
