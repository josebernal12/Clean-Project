import { ProductRepository } from '../domain/productRepository';
import { ProductValue } from '../domain/product.value';
export class ProductUseCase {
    constructor(
        private readonly productRepository: ProductRepository
    ) { }

    public createProduct = async ({ name, price, stock }) => {
        const productvalue =  new ProductValue({ name, price, stock })
        const productCreate = await this.productRepository.createProduct(productvalue)
        return productCreate

    }
    public getProduct = async () => {
        const product = await this.productRepository.find()
        return product
    }
}