import { IsString, IsNotEmpty, IsInt, IsPositive } from 'class-validator';

export class CreateRoomDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsInt()
    @IsPositive()
    capacity!: number;
}