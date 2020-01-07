import { IsString, IsNumber, IsOptional, IsDateString, IsISO8601, Min, Max,  } from 'class-validator';
export class ProductModel    {
  @IsNumber() @IsOptional() id: Number;
  @IsString() name :String;
  @IsNumber() sellIn:Number;
  @IsNumber() 
  @Min(0)
  @Max(100)
  price:Number;
} 