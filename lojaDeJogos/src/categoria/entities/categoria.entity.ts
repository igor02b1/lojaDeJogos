import { IsNotEmpty } from "class-validator";
import { Produto } from "src/Produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tb_categoria"})
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    descrição: string;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    genero: string;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    console: string;

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[];
}