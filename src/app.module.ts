import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { AppController } from './app.controller';
import { AppService } from './app.service';


import { HelloModule } from './hello/hello.module';
import { TimeModule } from './time/time.module';


import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import User from './user/user.entity';


@Module({
  imports: [HelloModule,
    TimeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username:"root",
      password: "",
      database: 'test1',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
  export class AppModule { }
