import { Module } from '@nestjs/common';
import { SwiftuiController } from './swiftui.controller';
import { SwiftuiService } from './swiftui.service';

@Module({
  imports: [],
  controllers: [SwiftuiController],
  providers: [SwiftuiService],
  exports: [SwiftuiService],
})
export class SwiftuiModule {}
