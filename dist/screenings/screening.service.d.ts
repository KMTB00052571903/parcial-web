import { Repository } from 'typeorm';
import { Screening } from './entities/screening.entity';
import { Room } from '../rooms/entities/room.entity';
import { CreateScreeningDto } from './dto/create-screening.dto';
import { UpdateScreeningDto } from './dto/update-screening.dto';
export declare class ScreeningService {
    private readonly screeningsRepository;
    private readonly roomsRepository;
    constructor(screeningsRepository: Repository<Screening>, roomsRepository: Repository<Room>);
    create(createScreeningDto: CreateScreeningDto): Promise<Screening>;
    findAll(): Promise<Screening[]>;
    findOne(id: number): Promise<Screening>;
    update(id: number, updateScreeningDto: UpdateScreeningDto): Promise<Screening>;
    remove(id: number): Promise<void>;
    removeCancelled(): Promise<{
        deleted: number;
    }>;
}
