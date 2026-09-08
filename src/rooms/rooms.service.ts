import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './entities/room.entity';
import { CreateRoomDto } from './dto/create-room.dto';

@Injectable()
export class RoomsService {
	constructor(
		@InjectRepository(Room)
		private readonly roomsRepository: Repository<Room>,
	) {}

	async create(createRoomDto: CreateRoomDto): Promise<Room> {
		const existingRoom = await this.roomsRepository.findOneBy({ name: createRoomDto.name });
		if (existingRoom) {
			throw new ConflictException(`Room with name "${createRoomDto.name}" already exists`);
		}

		const room = this.roomsRepository.create(createRoomDto);
		return this.roomsRepository.save(room);
	}

	findAll(): Promise<Room[]> {
		return this.roomsRepository.find();
	}

	async findOne(id: number): Promise<Room> {
		const room = await this.roomsRepository.findOneBy({ id });
		if (!room) {
			throw new NotFoundException(`Room with id ${id} not found`);
		}
		return room;
	}
}
