import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.model";

@Injectable()
export class ProdutosService {
    produtos: Produto[] = [
        new Produto("LIV01", "Livro de TDD e BDD na prática", 29.90),
        new Produto("LIV02", "Iniciando com o Flutter", 59.90),
        new Produto("LIV03", "Java 10", 229.90),
    ];

    listarProdutos(): Produto[] {
        return this.produtos;
    }

    listarProduto(id: number): Produto {
        return this.produtos[0];
    }

    criarProduto(produto: Produto){
        this.produtos.push(produto);
    }

    alterarProduto(produto: Produto){
        return produto;
    }

    deletarProduto(id: number){
        this.produtos.pop();
    }
}