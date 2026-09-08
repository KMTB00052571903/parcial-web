import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Room } from '../../rooms/entities/room.entity';

export enum ScreeningStatus {
  SCHEDULED = 'scheduled',
  CANCELLED = 'cancelled',
}

@Entity('screenings')
export class Screening {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  movieTitle: string;

  @Column({ type: 'timestamp', nullable: false })
  startsAt: Date;

  @Column({
    type: 'enum',
    enum: ScreeningStatus,
    default: ScreeningStatus.SCHEDULED,
    nullable: false,
  })
  status: ScreeningStatus;

  @ManyToOne(() => Room, { nullable: false, eager: true, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'roomId' })
  room: Room;
}
