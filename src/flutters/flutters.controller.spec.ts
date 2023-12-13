import { Test, TestingModule } from '@nestjs/testing';
import { FluttersController } from './flutters.controller';
import { FluttersService } from './flutters.service';

describe('FluttersController', () => {
  let controller: FluttersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FluttersController],
      providers: [FluttersService],
    }).compile();

    controller = module.get<FluttersController>(FluttersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
