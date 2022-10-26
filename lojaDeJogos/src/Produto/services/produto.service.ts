import { Injectable, HttpStatus, HttpException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>
    ) { }

    async findAll(): Promise <Produto[]> {
        return await this.produtoRepository.find();
    }

    async findById(id: number): Promise<Produto> {
        let produto = await this.produtoRepository.findOne({
            where: {
                id
            }
        });

        if(!produto)
            throw new HttpException('Produto não encontrado',HttpStatus.NOT_FOUND)

        return produto
    }

    async findByNome(nome: string): Promise <Produto[]> {
        return await this.produtoRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            }
        })
    }
    
    async create(produto: Produto) : Promise<Produto>{
        return await this.produtoRepository.save(produto)
    }

    async update(produto: Produto): Promise<Produto>{

        let buscarProduto: Produto = await this.findById(produto.id);

        if (!buscarProduto || !produto.id){
            throw new HttpException('produto não encontrado!',HttpStatus.NOT_FOUND);
        }
        return await this.produtoRepository.save(produto)
    }
    
    async delete(id: number): Promise<DeleteResult> {

        let buscarProduto = await this.findById(id);

        if(!buscarProduto){
            throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);
        }
        return await this.produtoRepository.delete(id);
    }

}

