import { Module } from '@nestjs/common';
import { FluttersService } from './flutters.service';
import { FluttersController } from './flutters.controller';

@Module({
  controllers: [FluttersController],
  providers: [FluttersService],
})
export class FluttersModule {}
