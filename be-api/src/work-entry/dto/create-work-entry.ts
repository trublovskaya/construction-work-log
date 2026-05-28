import { IsDateString, IsNumber, IsString, Min } from 'class-validator';

export class CreateWorkEntry {
  @IsDateString()
  date: string;

  @IsString()
  workTypeId: string;

  @IsNumber()
  @Min(0)
  volume: number;

  @IsString()
  unit: string;

  @IsString()
  performer: string;
}
