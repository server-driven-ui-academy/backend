import { Controller, Get } from '@nestjs/common';
import { UikitService } from './uikit.service';

@Controller('uikit')
export class UikitController {
  constructor(private readonly uikitService: UikitService) {}

  @Get('/home')
  getHome() {
    return this.uikitService.getHome();
  }

  @Get('/product-1')
  getProduct1() {
    return this.uikitService.getProduct1();
  }
  @Get('/product-11')
  getProduct11() {
    return this.uikitService.getProduct11();
  }


  @Get('/bannerA')
  getBannerA() {
    return this.uikitService.getBannerA();
  }
  @Get('/bannerB')
  getBannerB() {
    return this.uikitService.getBannerB();
  }
  @Get('/bannerC')
  getBannerC() {
    return this.uikitService.getBannerC();
  }
}
