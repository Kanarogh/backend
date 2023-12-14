import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';




@Injectable()
export class FluttersService {

  constructor(private readonly prisma: PrismaService) {}


 create(createFlutterDto: Prisma.ThingCreateInput) {
    return this.prisma.thing.create({
      data: createFlutterDto,
    });
    }

  update(id: number, updateFlutterDto: Prisma.ThingUpdateInput) {
      return this.prisma.thing.update({
        where: {
          id: id
             },
        data: updateFlutterDto,
    });}

  findAll() {
    return this.prisma.thing.findMany();
  }

  findOne(id: number) {
    return this.prisma.thing.findUnique({
      where: {
        id: id
      }
    });
  }

  

  remove(id: number) {
    return this.prisma.thing.delete({
      where: {
        id: id
      }
    });
  }
}
