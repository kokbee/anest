import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

// 서비스와 컨트롤러 분리하는 이유: 서비스는 요청, 응답에대해서는 모름
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
