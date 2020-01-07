import {Injectable, HttpException, HttpStatus} from '@nestjs/common';
import {Model} from 'mongoose'

import { OrdersModel } from './orders.model';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ProductModel } from 'src/products/products.model';
import { ProductService } from 'src/products/products.services';



@Injectable()
export class OrdersService{
    constructor(@InjectModel('Orders') private readonly orderModel: Model<OrdersModel> ,
             private readonly productService : ProductService){}
    async getAll(){
        return this.orderModel.find();
        
    }
    async add(order: OrdersModel){
        let isValid = mongoose.Types.ObjectId.isValid(order.productID);
        if (isValid){
          await this.productService.findById(order.productID);
          const createprod = new this.orderModel(order);
          await createprod.save();
        }else{
          throw new HttpException('Invalid Product', HttpStatus.BAD_REQUEST);
        }
        

    }
    async update(prod){
       //
      }
    async delete(id){
        await this.orderModel.deleteOne({_id :id});
    }
    async findById(id: string) /*Promise <OrdersModel>*/ {
      /*  const product = await this.productService.findById(id)
        if (!product) {
          throw new HttpException('Product not found', HttpStatus.NO_CONTENT);
        }
        return product;
        */
     /*  return new OrdersModel;*/
      }

    test() : string {
        return "test Order"


    }
}