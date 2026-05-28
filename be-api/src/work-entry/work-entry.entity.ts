import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { WorkType } from '../work-type/work-type.entity';

@Entity('work_entry')
export class WorkEntry {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date' })
  date: string;

  @ManyToOne(() => WorkType, { eager: true })
  @JoinColumn({ name: 'work_type_id' })
  workType: WorkType;

  @Column('float')
  volume: number;

  @Column()
  unit: string;

  @Column()
  performer: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
