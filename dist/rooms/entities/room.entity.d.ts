import { Screening } from '../../screenings/entities/screening.entity';
export declare class Room {
    id: number;
    name: string;
    capacity: number;
    screenings: Screening[];
}
