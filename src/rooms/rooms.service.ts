import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';

export type Room = {
	id: number;
	name: string;
	capacity?: number;
	[key: string]: any;
};

@Injectable()
export class RoomsService {
	private rooms: Room[] = [];
	private nextId = 1;

	create(createRoomDto: CreateRoomDto): Room {
		const room: Room = {
			id: this.nextId++,
			...createRoomDto,
		};
		this.rooms.push(room);
		return room;
	}

	findAll(): Room[] {
		return [...this.rooms];
	}

	findOne(id: number): Room {
		const room = this.rooms.find(r => r.id === id);
		if (!room) throw new NotFoundException(`Room with id ${id} not found`);
		return room;
	}

	update(id: number, partial: Partial<CreateRoomDto>): Room {
		const idx = this.rooms.findIndex(r => r.id === id);
		if (idx === -1) throw new NotFoundException(`Room with id ${id} not found`);
		const updated = { ...this.rooms[idx], ...partial };
		this.rooms[idx] = updated;
		return updated;
	}

	remove(id: number): void {
		const idx = this.rooms.findIndex(r => r.id === id);
		if (idx === -1) throw new NotFoundException(`Room with id ${id} not found`);
		this.rooms.splice(idx, 1);
	}
}
