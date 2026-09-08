import { Repository } from 'typeorm';
import { Room } from './entities/room.entity';
import { CreateRoomDto } from './dto/create-room.dto';
export declare class RoomsService {
    private readonly roomsRepository;
    constructor(roomsRepository: Repository<Room>);
    create(createRoomDto: CreateRoomDto): Promise<Room>;
    findAll(): Promise<Room[]>;
    findOne(id: number): Promise<Room>;
}
