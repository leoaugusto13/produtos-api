import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProdutosController } from './produtos.controller';

@Module({
  imports: [],
  controllers: [ProdutosController],
  providers: [AppService],
})
export class AppModule {}
