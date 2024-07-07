import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'schemas/product.schema';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private product: Model<Product>){}
    async getProducts(): Promise<Product[]>{
        const products = await this.product.find()
        return products
    }
    async getProductById(id: string): Promise<Product>{
        const product = this.product.findById(id)
        return product
    }
    async createProduct(productData: Product): Promise<Product>{
        const product = new this.product(productData)
        await product.save()
        return product
    }
    async updateProduct(productData: Product, id: string): Promise<Product>{
        const product = await this.product.findByIdAndUpdate(id, productData)
        return product
    }
    async deleteProduct(id: string): Promise<Product>{
        const product = await this.product.findByIdAndDelete(id)
        return product
    }
}
