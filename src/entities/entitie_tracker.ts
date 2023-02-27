import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export class EntityTracker {
  @CreateDateColumn({ name: 'createdAt', update: false })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
  @DeleteDateColumn({ name: 'deletedAt' })
  deletedAt: Date;
}
