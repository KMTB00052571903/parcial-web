import { ScreeningService } from './screening.service';
import { CreateScreeningDto } from './dto/create-screening.dto';
import { UpdateScreeningDto } from './dto/update-screening.dto';
export declare class ScreeningController {
    private readonly screeningService;
    constructor(screeningService: ScreeningService);
    create(createScreeningDto: CreateScreeningDto): Promise<import("./entities/screening.entity").Screening>;
    findAll(): Promise<import("./entities/screening.entity").Screening[]>;
    findOne(id: number): Promise<import("./entities/screening.entity").Screening>;
    update(id: number, updateScreeningDto: UpdateScreeningDto): Promise<import("./entities/screening.entity").Screening>;
    removeCancelled(): Promise<{
        deleted: number;
    }>;
    remove(id: number): Promise<void>;
}
