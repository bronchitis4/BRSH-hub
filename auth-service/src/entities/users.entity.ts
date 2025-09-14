import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  surname: string;
  
  @Column()
  email: string;

  @Column()
  password_hash: string;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;
}
