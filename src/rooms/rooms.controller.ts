import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { RoomsService } from './rooms.service';

class CreateRoomDto {
	readonly name: string;
	readonly capacity?: number;
}

class UpdateRoomDto {
	readonly name?: string;
	readonly capacity?: number;
}

@Controller('rooms')
export class RoomsController {
	constructor(private readonly roomsService: RoomsService) {}

	@Get()
	async findAll() {
		return this.roomsService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string) {
		const room = await this.roomsService.findOne(id);
		if (!room) throw new HttpException('Room not found', HttpStatus.NOT_FOUND);
		return room;
	}

	@Post()
	async create(@Body() dto: CreateRoomDto) {
		return this.roomsService.create(dto);
	}

	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: UpdateRoomDto) {
		const updated = await this.roomsService.update(id, dto);
		if (!updated) throw new HttpException('Room not found', HttpStatus.NOT_FOUND);
		return updated;
	}

	@Delete(':id')
	async remove(@Param('id') id: string) {
		const removed = await this.roomsService.remove(id);
		if (!removed) throw new HttpException('Room not found', HttpStatus.NOT_FOUND);
		return { deleted: true };
	}
}

export default RoomsController;
