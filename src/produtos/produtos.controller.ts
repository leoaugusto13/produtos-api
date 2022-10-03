import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";
import { ProdutosService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {
constructor(private produtosService: ProdutosService){

}
 
    @Get()
    listarTodosProdutos(): Produto[] {
        return this.produtosService.listarProdutos();
    }

    @Get(':id')
    listarUmProduto(@Param() params) : Produto {
        return this.produtosService.listarProduto(params.id);
    }

    @Post()
    criarProduto(@Body() produto: Produto){
        this.produtosService.criarProduto(produto);
    }

    @Put()
    alterarProduto(@Body() produto: Produto) {
      return this.produtosService.alterarProduto(produto);
    }

    @Delete(':id')
    deletarProduto(@Param() params){
        this.produtosService.deletarProduto(params.id);
    }
}