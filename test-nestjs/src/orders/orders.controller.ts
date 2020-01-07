import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { OrdersModel } from './orders.model';
import { OrdersService } from './orders.services';


@Controller('orders')
export class OrdersController {
    constructor(private orderService: OrdersService) {}
    @Get()
   async GetAll(){
      return await this.orderService.getAll();
    }
    @Post()
    async Add(@Body() product:OrdersModel){
        await this.orderService.add(product);
    }
   @Delete('delete/:id')
    async Delete(@Param('id') id){
      //  await this.orderService.delete(id);
  }
  @Put()
  updateProduct(@Body() product: OrdersModel) {
    console.log('update product', product);
   // this.orderService.update(product);
  }
  @Get('test')
  getTest(){
      return  "hello";
  }
}

