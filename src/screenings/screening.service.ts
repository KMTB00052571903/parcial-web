import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Screening, ScreeningStatus } from './entities/screening.entity';
import { Room } from '../rooms/entities/room.entity';
import { CreateScreeningDto } from './dto/create-screening.dto';
import { UpdateScreeningDto } from './dto/update-screening.dto';

@Injectable()
export class ScreeningService {
  constructor(
    @InjectRepository(Screening)
    private readonly screeningsRepository: Repository<Screening>,
    @InjectRepository(Room)
    private readonly roomsRepository: Repository<Room>,
  ) {}

  async create(createScreeningDto: CreateScreeningDto) {
    const room = await this.roomsRepository.findOneBy({ id: createScreeningDto.roomId });
    if (!room) {
      throw new NotFoundException(`Room with id ${createScreeningDto.roomId} not found`);
    }

    const screening = this.screeningsRepository.create({
      movieTitle: createScreeningDto.movieTitle,
      startsAt: new Date(createScreeningDto.startsAt),
      status: ScreeningStatus.SCHEDULED,
      room,
    });

    return this.screeningsRepository.save(screening);
  }

  findAll() {
    return this.screeningsRepository.find();
  }

  async findOne(id: number) {
    const screening = await this.screeningsRepository.findOneBy({ id });
    if (!screening) {
      throw new NotFoundException(`Screening with id ${id} not found`);
    }
    return screening;
  }

  async update(id: number, updateScreeningDto: UpdateScreeningDto) {
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

  async remove(id: number) {
    const screening = await this.findOne(id);
    await this.screeningsRepository.remove(screening);
  }

  async removeCancelled() {
    const result = await this.screeningsRepository.delete({ status: ScreeningStatus.CANCELLED });
    return { deleted: result.affected ?? 0 };
  }
}
