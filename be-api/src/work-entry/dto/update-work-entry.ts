import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class UpdateWorkEntry {
  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsString()
  workTypeId?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  volume?: number;

  @IsOptional()
  @IsString()
  unit?: string;

  @IsOptional()
  @IsString()
  performer?: string;
}
