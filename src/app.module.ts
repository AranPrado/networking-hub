import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InterationComponent } from './interation/interation.component';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
   declarations: [
    "InterationComponent"
  ],
})
export class AppModule {}
