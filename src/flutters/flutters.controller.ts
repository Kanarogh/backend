import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FluttersService } from './flutters.service';
import { CreateFlutterDto } from './dto/create-flutter.dto';
import { UpdateFlutterDto } from './dto/update-flutter.dto';

@Controller('flutters')
export class FluttersController {
  constructor(private readonly fluttersService: FluttersService) {}

  @Post()
  create(@Body() createFlutterDto: CreateFlutterDto) {
    return this.fluttersService.create(createFlutterDto);
  }

  @Get()
  findAll() {
    return this.fluttersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fluttersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlutterDto: UpdateFlutterDto) {
    return this.fluttersService.update(+id, updateFlutterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fluttersService.remove(+id);
  }
}
