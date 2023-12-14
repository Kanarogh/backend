import { Module } from '@nestjs/common';
import { FluttersService } from './things.service';
import { FluttersController } from './things.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [FluttersController],
  providers: [FluttersService],
})
export class FluttersModule {}
