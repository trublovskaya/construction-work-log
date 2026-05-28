import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('work_type')
export class WorkType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;
}
