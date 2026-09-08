import { IsString, IsDateString, IsInt, IsPositive, IsNotEmpty } from 'class-validator';

export class CreateScreeningDto {
    @IsNotEmpty()
    @IsString()
    movieTitle!: string;

    @IsNotEmpty()
    @IsDateString()
    startsAt!: string;

    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    roomId!: number;
}

