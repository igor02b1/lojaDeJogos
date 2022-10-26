import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.modules';
import { Categoria } from './categoria/entities/categoria.entity';
import { Produto } from './Produto/entities/produto.entity';
import { ProdutoModules } from './Produto/produto.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_loja_de_games',
      entities: [Produto, Categoria],
      synchronize: true,
    }),
    ProdutoModules,
    CategoriaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
