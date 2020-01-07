import {Injectable, HttpException, HttpStatus} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {ProductModel} from './products.model';

@Injectable()
export class ProductService{
    constructor(@InjectModel('Products') private readonly productModel: Model<ProductModel>){}
    async getAll(): Promise<[ProductModel]>{
        return this.productModel.find();
        
    }
    async add(prod){
        const createprod = new this.productModel(prod);
        await createprod.save();
    }
    async update(prod){
       //
      }
    async delete(id){
        await this.productModel.deleteOne({_id :id});
    }
    async findById(id: String): Promise<ProductModel> {
        const product = await this.productModel.findById(id).exec();
        if (!product) throw new HttpException('Product not found', HttpStatus.BAD_REQUEST);
        return product;
      }

    test() : string {
        return "test"


    }
}