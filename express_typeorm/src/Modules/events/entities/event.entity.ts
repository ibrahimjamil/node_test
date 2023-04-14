import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Workshop } from './workshop.entity';

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Workshop, workshop => workshop.eventId)
    workshops: Workshop[];

    @Column({ type: 'datetime' })
    createdAt: string;
}
