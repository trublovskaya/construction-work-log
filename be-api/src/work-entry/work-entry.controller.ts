import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { WorkEntryService } from './work-entry.service';
import { CreateWorkEntry } from './dto/create-work-entry';
import { UpdateWorkEntry } from './dto/update-work-entry';

@Controller('work-entry')
export class WorkEntryController {
  constructor(private readonly workEntry: WorkEntryService) {}

  @Get()
  findAll() {
    return this.workEntry.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workEntry.findOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() dto: CreateWorkEntry) {
    return this.workEntry.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateWorkEntry) {
    return this.workEntry.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.workEntry.remove(id);
  }
}
