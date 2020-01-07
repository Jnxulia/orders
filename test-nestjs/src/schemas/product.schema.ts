import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  nombre: String,
  sellIn: Number,
  price: Number,
  canExpirate : Boolean, 
  canIncrement : Boolean

},{
  versionKey:false
});  