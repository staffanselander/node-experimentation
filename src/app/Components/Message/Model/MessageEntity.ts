import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MessageEntity {

    @PrimaryGeneratedColumn()
    public messageID: number;

    @Column()
    public title: string;

    @Column('text')
    public message: string;
}
