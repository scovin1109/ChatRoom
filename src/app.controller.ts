import { Controller, Get,Render} from '@nestjs/common';
import { get } from 'fp-ts/lib/FromState';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()

  getHello(): string {
    return this.appService.getHello();
  }


}
