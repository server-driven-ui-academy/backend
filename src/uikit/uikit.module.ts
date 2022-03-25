import { Module } from '@nestjs/common';
import { UikitController } from './uikit.controller';
import { UikitService } from './uikit.service';

@Module({
  imports: [],
  controllers: [UikitController],
  providers: [UikitService],
  exports: [UikitService],
})
export class UikitModule {}
