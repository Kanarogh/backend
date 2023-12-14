import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FluttersModule } from './things/things.module';
import { CategoriesModule } from './categories/categories.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [FluttersModule, CategoriesModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
