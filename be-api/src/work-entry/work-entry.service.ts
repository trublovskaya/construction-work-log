import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkEntry } from './work-entry.entity';
import { Repository } from 'typeorm';
import { CreateWorkEntry } from './dto/create-work-entry';
import { UpdateWorkEntry } from './dto/update-work-entry';

@Injectable()
export class WorkEntryService {
  constructor(
    @InjectRepository(WorkEntry)
    private readonly workEntryRepository: Repository<WorkEntry>,
  ) {}

  async findAll(): Promise<WorkEntry[]> {
    return await this.workEntryRepository.find();
  }

  async findOne(id: string): Promise<WorkEntry> {
    const user = await this.workEntryRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`WorkEntry with ID "${id}" not found`);
    }

    return user;
  }

  async create(dto: CreateWorkEntry): Promise<WorkEntry> {
    const workEntry = this.workEntryRepository.create({
      ...dto,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return await this.workEntryRepository.save(workEntry);
  }

  async update(id: string, dto: UpdateWorkEntry): Promise<WorkEntry> {
    const workEntry = await this.workEntryRepository.findOne({ where: { id } });
    if (!workEntry) {
      throw new NotFoundException(`WorkEntry with ID "${id}" not found`);
    }

    this.workEntryRepository.merge(workEntry, dto);

    return workEntry;
  }

  async remove(id: string): Promise<void> {
    const workEntry = await this.workEntryRepository.findOne({ where: { id } });

    if (!workEntry) {
      throw new NotFoundException(`WorkEntry with ID "${id}" not found`);
    }

    await this.workEntryRepository.remove(workEntry);
  }
}
