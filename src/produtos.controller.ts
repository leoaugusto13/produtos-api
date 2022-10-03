import { Body, Controller, Get, Param, Post } from "@nestjs/common";

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
}