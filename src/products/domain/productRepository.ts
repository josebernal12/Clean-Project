import { ProductEntity } from "./product.entity";

export interface ProductRepository {
    find(): Promise<ProductEntity | null>
    createProduct(product: ProductEntity): Promise<ProductEntity | null>
}