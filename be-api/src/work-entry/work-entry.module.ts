import { Module } from '@nestjs/common';
import { WorkEntryService } from './work-entry.service';
import { WorkEntryController } from './work-entry.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkEntry } from './work-entry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkEntry])],
  providers: [WorkEntryService],
  controllers: [WorkEntryController],
})
export class WorkEntryModule {}
