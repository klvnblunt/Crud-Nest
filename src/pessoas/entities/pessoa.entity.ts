import { IsEmail } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Pessoa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255})
    @IsEmail()
    email: string;

    @Column({type: 'varchar', length: 255})
    name: string;

    @Column({type: 'varchar', length: 255})
    passwordHash: string;

    @CreateDateColumn()
    createAt?: Date;

    @UpdateDateColumn()
    updateAt?: Date;
}
