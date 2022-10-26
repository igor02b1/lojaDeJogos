import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'tb_produtos' })
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 150, nullable: false })
    nome: string;

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
    valor: number;
    categoria: any;
}