import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwiftuiModule } from './swiftui/swiftui.module';
import { UikitModule } from './uikit/uikit.module';

@Module({
  imports: [SwiftuiModule, UikitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
