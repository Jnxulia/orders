import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductSchema } from 'src/schemas/product.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './products.services';


@Module({
  imports: [
    MongooseModule.forFeature([{
        name:'Products',
        schema:ProductSchema,
        collection:'Products'
      }]),
    
  ],
  controllers: [ProductsController], 
  providers : [ProductService], 
  exports : [ ProductService]
})
export class ProductsModule {}
