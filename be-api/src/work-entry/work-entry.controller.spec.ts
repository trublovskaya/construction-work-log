import { Test, TestingModule } from '@nestjs/testing';
import { WorkEntryController } from './work-entry.controller';

describe('WorkEntryController', () => {
  let controller: WorkEntryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkEntryController],
    }).compile();

    controller = module.get<WorkEntryController>(WorkEntryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
