import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController {

    @Get()
    obterTodosProdutos(): string {
        return 'Lista todos os produtos';
    }

    @Get(':id')
    obterUmProduto(@Param() params) : string {
        return `Retorna os dados do produto ${params.id}`;
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