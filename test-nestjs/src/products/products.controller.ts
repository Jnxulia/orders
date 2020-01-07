import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { ProductModel } from './products.model';
import { ProductService } from './products.services';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductService) {}
    @Get()
    async GetAll(): Promise<[ProductModel]> {
      return await this.productService.getAll();
    }
    @Post()
    async Add(@Body() product:ProductModel){
        await this.productService.add(product);
    }
   @Delete('delete/:id')
    async Delete(@Param('id') id){
        await this.productService.delete(id);
  }
  @Put()
  updateProduct(@Body() product: ProductModel) {
    console.log('update product', product);
    this.productService.update(product);
  }
  @Get('test')
  getTest(){
      return  this.productService.test();
  }
}

