import { Controller, Get } from '@nestjs/common';
import { WorkTypeService } from './work-type.service';

@Controller('work-type')
export class WorkTypeController {
  constructor(private readonly workType: WorkTypeService) {}

  @Get()
  findAll() {
    return this.workType.findAll();
  }
}
