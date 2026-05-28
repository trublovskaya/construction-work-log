import { Module } from '@nestjs/common';
import { WorkTypeService } from './work-type.service';
import { WorkTypeController } from './work-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkType } from './work-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkType])],
  providers: [WorkTypeService],
  controllers: [WorkTypeController],
})
export class WorkTypeModule {}
