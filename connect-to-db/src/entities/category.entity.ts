import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { VehicleType } from './vehicle-type.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehicle_type_id: number;

  @Column()
  name: string;

  @ManyToOne(() => VehicleType)
  @JoinColumn({ name: 'vehicle_type_id' })
  vehicleType: VehicleType;
}