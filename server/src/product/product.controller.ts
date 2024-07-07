import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'schemas/product.schema';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  getAllProducts() {
    return this.productService.getProducts();
  }
  @Get('/:id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Post()
  createProduct(@Body() productData: Product) {
    return this.productService.createProduct(productData);
  }

  @Put('/:id')
  updateProduct(@Body() productData: Product, @Param('id') id: string) {
    return this.productService.updateProduct(productData, id);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
