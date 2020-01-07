import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  username: {type: String, default: 'bobEsponja'},
  client  : {type: String, default: 'Tutancamon'},
  orderDate: {type: Date, default: Date.now} , 
  productID : {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
  },
  quantity : {type: Number, default: 1} , 
  registrationDate: {type: Date, default: Date.now}

},{
  versionKey:false
});  