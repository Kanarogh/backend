import { Injectable } from '@nestjs/common';
import { CreateFlutterDto } from './dto/create-flutter.dto';
import { UpdateFlutterDto } from './dto/update-flutter.dto';

@Injectable()
export class FluttersService {
  create(createFlutterDto: CreateFlutterDto) {
    return 'This action adds a new flutter';
  }

  findAll() {
    return `This action returns all flutters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} flutter`;
  }

  update(id: number, updateFlutterDto: UpdateFlutterDto) {
    return `This action updates a #${id} flutter`;
  }

  remove(id: number) {
    return `This action removes a #${id} flutter`;
  }
}
