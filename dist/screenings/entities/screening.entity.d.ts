import { Room } from '../../rooms/entities/room.entity';
export declare enum ScreeningStatus {
    SCHEDULED = "scheduled",
    CANCELLED = "cancelled"
}
export declare class Screening {
    id: number;
    movieTitle: string;
    startsAt: Date;
    status: ScreeningStatus;
    room: Room;
}
