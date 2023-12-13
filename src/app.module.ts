import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FluttersModule } from './flutters/flutters.module';

@Module({
  imports: [FluttersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
