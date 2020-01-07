import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from 'src/schemas/orders.schema';
import { OrdersService } from './orders.services';
import { OrdersController } from './orders.controller';
import { ProductsModule } from 'src/products/products.module';


@Module({
  imports: [

    MongooseModule.forFeature([{
        name:'Orders',
        schema:OrderSchema,
        collection:'Orders'
      }]),
      ProductsModule
    
  ],
  controllers: [OrdersController], 
  providers : [ OrdersService], 
 // exports :[ProductsModule, ]
})
export class OrdersModule {}
