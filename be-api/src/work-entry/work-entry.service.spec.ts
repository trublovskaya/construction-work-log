import { Test, TestingModule } from '@nestjs/testing';
import { WorkEntryService } from './work-entry.service';

describe('WorkEntryService', () => {
  let service: WorkEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkEntryService],
    }).compile();

    service = module.get<WorkEntryService>(WorkEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
