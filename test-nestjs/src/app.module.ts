import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    
    ProductsModule, 
    OrdersModule, 
    MongooseModule.forRoot("mongodb://mongodb:27017/rest_api_fs"),
     ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
