import { Controller, Get } from '@nestjs/common';

@Controller('time')
export class TimeController {
    @Get()
    getTime():string{
return new Date().toLocaleTimeString('he-IL', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});    }
}
