import { Test, TestingModule } from '@nestjs/testing';
import { FluttersService } from './flutters.service';

describe('FluttersService', () => {
  let service: FluttersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FluttersService],
    }).compile();

    service = module.get<FluttersService>(FluttersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
