import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Users } from './users.entity';

@Entity("user_tokens")
export class UserToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @CreateDateColumn({ type: 'datetime' })
  expire_at: Date;

  @CreateDateColumn()
  @OneToOne(() => Users, user => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user_id: Users;
}
