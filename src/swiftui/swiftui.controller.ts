import { Controller, Get, Param } from '@nestjs/common';
import { SwiftuiService } from './swiftui.service';

@Controller('swiftui')
export class SwiftuiController {
  constructor(private readonly swiftuiService: SwiftuiService) {}

  @Get()
  getHome() {
    return this.swiftuiService.getHome();
  }

  @Get('/pageone/:color')
  getPageOne(@Param('color') color: string) {
    return this.swiftuiService.getPageOne(color);
  }

  @Get('/pagetwo')
  getPageTwo() {
    return this.swiftuiService.getPageTwo();
  }
}
