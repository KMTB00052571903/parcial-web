import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScreeningService } from './screening.service';
import { ScreeningController } from './screening.controller';
import { Screening } from './entities/screening.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Screening])],
  controllers: [ScreeningController],
  providers: [ScreeningService],
  exports: [ScreeningService],
})
export class ScreeningModule {}
