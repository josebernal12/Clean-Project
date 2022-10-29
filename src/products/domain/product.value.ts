import { ProductEntity } from './product.entity';
export class ProductValue implements ProductEntity {
    name: string;
    price: number;
    stock: number;

    constructor({ name, price, stock }: { name: string, price: number, stock: number }) {
        this.name = name
        this.price = price
        this.stock = stock
    }
}