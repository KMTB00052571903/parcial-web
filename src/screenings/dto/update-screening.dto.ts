import { IsDateString, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { ScreeningStatus } from '../entities/screening.entity';

export class UpdateScreeningDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  movieTitle?: string;

  @IsOptional()
  @IsDateString()
  startsAt?: string;

  @IsOptional()
  @IsEnum(ScreeningStatus)
  status?: ScreeningStatus;
}

