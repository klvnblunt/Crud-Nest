import { IsEmail } from "class-validator";
import { RecadoEntity } from "src/recados/entities/recado.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Pessoa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255, unique:true})
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

    @OneToMany(() => RecadoEntity, recado => recado.de)
    recadosEnviados: RecadoEntity[]

    @OneToMany(() => RecadoEntity, recado => recado.para)
    recadosRecebidos: RecadoEntity[]
}
