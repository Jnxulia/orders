import { IsString, IsNumber, IsOptional, IsDateString, IsISO8601,  } from 'class-validator';
export class OrdersModel    {
    @IsNumber() @IsOptional()  id: Number;
    @IsString() productID :String;
    @IsString()
    orderDate : string;
    
  
} 
