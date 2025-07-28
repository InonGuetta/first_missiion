import { Injectable } from '@nestjs/common';
import User from './user.entity';

@Injectable()
export class UserService {
    async create(body) {
        const user = new User();
        user.password = body.password;
        user.username = body.username;
        return await user.save()
    }
}
