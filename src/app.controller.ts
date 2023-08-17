import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() query: any) {
    return this.appService.getHello(query);
  }
  @Post()
  create(@Req() request: Request, @Query() query: any){
    return this.appService.create(request.body, query)
  }
}
