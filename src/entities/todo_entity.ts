import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityTracker } from './entitie_tracker';
import { TodoStatusEnum } from '../todo/todo';

@Entity('todo')
export class TodoEntity extends EntityTracker {
  constructor(
    name: string,
    description: string,
    creationDate: Date,
    status: TodoStatusEnum,
  ) {
    super();
    this.name = name;
    this.description = description;
    this.status = status;
  }
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column({ name: 'name', length: 10 })
  name: string;
  @Column({ name: 'description' })
  description: string;
  @Column({
    name: 'status',
    type: 'enum',
    enum: TodoStatusEnum,
    default: TodoStatusEnum.waiting,
  })
  status: TodoStatusEnum;
}
