import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";

@Controller('produtos')
export class ProdutosController {

    produtos: Produto[] = [
        new Produto("LIV01", "Livro de TDD e BDD na prática", 29.90),
        new Produto("LIV02", "Iniciando com o Flutter", 59.90),
        new Produto("LIV03", "Java 10", 229.90),
    ];

    @Get()
    listarTodosProdutos(): Produto[] {
        return this.produtos;
    }

    @Get(':id')
    listarUmProduto(@Param() params) : Produto {
        return this.produtos[0];
    }

    @Post()
    criarProduto(@Body() produto) : string {
        console.log(produto);
        return 'Produto criado com sucesso';
    }

    @Put()
    alterarProduto(@Body() produto) : string {
        return 'Produto alterado com sucesso';
    }

    @Delete(':id')
    deletarProduto(@Param() params) : string {
        return `Deletado o produto ${params.id}`;
    }
}