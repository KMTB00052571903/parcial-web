import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Screening } from '../../screenings/entities/screening.entity';

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'int' })
  capacity: number;

  @OneToMany(() => Screening, (screening) => screening.room)
  screenings: Screening[];
}
