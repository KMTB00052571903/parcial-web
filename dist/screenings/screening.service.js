"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreeningService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const screening_entity_1 = require("./entities/screening.entity");
const room_entity_1 = require("../rooms/entities/room.entity");
let ScreeningService = class ScreeningService {
    screeningsRepository;
    roomsRepository;
    constructor(screeningsRepository, roomsRepository) {
        this.screeningsRepository = screeningsRepository;
        this.roomsRepository = roomsRepository;
    }
    async create(createScreeningDto) {
        const room = await this.roomsRepository.findOneBy({ id: createScreeningDto.roomId });
        if (!room) {
            throw new common_1.NotFoundException(`Room with id ${createScreeningDto.roomId} not found`);
        }
        const screening = this.screeningsRepository.create({
            movieTitle: createScreeningDto.movieTitle,
            startsAt: new Date(createScreeningDto.startsAt),
            status: screening_entity_1.ScreeningStatus.SCHEDULED,
            room,
        });
        return this.screeningsRepository.save(screening);
    }
    findAll() {
        return this.screeningsRepository.find();
    }
    async findOne(id) {
        const screening = await this.screeningsRepository.findOneBy({ id });
        if (!screening) {
            throw new common_1.NotFoundException(`Screening with id ${id} not found`);
        }
        return screening;
    }
    async update(id, updateScreeningDto) {
        const screening = await this.findOne(id);
        if (updateScreeningDto.movieTitle !== undefined) {
            screening.movieTitle = updateScreeningDto.movieTitle;
        }
        if (updateScreeningDto.startsAt !== undefined) {
            screening.startsAt = new Date(updateScreeningDto.startsAt);
        }
        if (updateScreeningDto.status !== undefined) {
            screening.status = updateScreeningDto.status;
        }
        return this.screeningsRepository.save(screening);
    }
    async remove(id) {
        const screening = await this.findOne(id);
        await this.screeningsRepository.remove(screening);
    }
    async removeCancelled() {
        const result = await this.screeningsRepository.delete({ status: screening_entity_1.ScreeningStatus.CANCELLED });
        return { deleted: result.affected ?? 0 };
    }
};
exports.ScreeningService = ScreeningService;
exports.ScreeningService = ScreeningService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(screening_entity_1.Screening)),
    __param(1, (0, typeorm_1.InjectRepository)(room_entity_1.Room)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ScreeningService);
//# sourceMappingURL=screening.service.js.map