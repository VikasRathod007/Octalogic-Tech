import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";

@Entity('models')
export class Model{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    category_id: number;
    @Column()
    name: string;
    @ManyToOne(() => Category)
    @JoinColumn({ name: 'category_id' })
    category:Category
}