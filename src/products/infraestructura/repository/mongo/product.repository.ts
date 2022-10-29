import { ProductEntity } from '../../../domain/product.entity';
import { ProductRepository } from '../../../domain/productRepository';
import productModel from '../../model/product.schema'
export class ProductMongo implements ProductRepository {
    async find(): Promise<any> {
        const product = await productModel.find()
        return product
    }
    async createProduct(product: ProductEntity): Promise<any> {
        const productCreate = await productModel.create(product)
        return productCreate
    }

}