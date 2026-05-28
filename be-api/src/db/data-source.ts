import 'dotenv/config';
import { DataSource } from 'typeorm';
import { WorkEntry } from '../work-entry/work-entry.entity';
import { WorkType } from '../work-type/work-type.entity';

const base = {
  type: 'postgres' as const,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

export default new DataSource({
  ...base,
  entities: [WorkEntry, WorkType],
  synchronize: true,
});
