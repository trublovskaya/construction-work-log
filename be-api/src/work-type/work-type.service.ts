import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkType } from './work-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkTypeService {
  constructor(
    @InjectRepository(WorkType)
    private readonly workTypeRepository: Repository<WorkType>,
  ) {}

  async findAll(): Promise<WorkType[]> {
    return await this.workTypeRepository.find();
  }
}
