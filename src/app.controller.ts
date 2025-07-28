import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// זה בעצם מקביל ל fetch api  הווי אומר החיבור לקליינט  
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
