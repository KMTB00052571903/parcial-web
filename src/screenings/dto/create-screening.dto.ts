import { IsString, IsDate, IsInt, IsPositive, IsNotEmpty } from 'class-validator';

export class CreateScreeningDto {
    @IsNotEmpty()
    @IsString()
    movieTitle!: string;

    @IsNotEmpty()
    @IsDate()
    startsAt!: Date;

    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    roomId!: number;
}

