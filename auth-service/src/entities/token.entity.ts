import { Entity, PrimaryGeneratedColumn, BeforeInsert, Column, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Users } from './users.entity';

@Entity("user_tokens")
export class UserToken {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: string;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    @Column({ type: 'datetime' })
    expire_in: Date;

    @BeforeInsert()
    setExpireIn() {
        const now = new Date();
        this.expire_in = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    }

    @OneToOne(() => Users, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: Users;

}
