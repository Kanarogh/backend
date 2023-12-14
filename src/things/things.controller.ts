import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FluttersService } from './things.service';
import { Prisma } from '@prisma/client';


@Controller('flutters')
export class FluttersController {
  constructor(private readonly fluttersService: FluttersService) {}

  @Post()
  create(@Body() createFlutterDto: Prisma.ThingCreateInput) {
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
  update(@Param('id') id: string, @Body() updateFlutterDto: Prisma.ThingUpdateInput) {
    return this.fluttersService.update(+id, updateFlutterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fluttersService.remove(+id);
  }
}
