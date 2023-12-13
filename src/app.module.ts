import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FluttersModule } from './flutters/flutters.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [FluttersModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
