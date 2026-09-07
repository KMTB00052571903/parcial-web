import { IsDateString, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';

export enum ScreeningStatus {
  SCHEDULED = 'scheduled',
  CANCELLED = 'cancelled',
}

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

