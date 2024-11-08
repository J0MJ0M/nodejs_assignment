import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Assignment1Controller } from './assignment1/assignment1.controller';

@Module({
  imports: [],
  controllers: [AppController, Assignment1Controller],
  providers: [AppService],
})
export class AppModule {}
