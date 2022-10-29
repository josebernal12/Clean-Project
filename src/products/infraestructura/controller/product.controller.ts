import { Request, Response } from 'express';
import { ProductUseCase } from '../../application/productUserCase'
export class ProductController {
    constructor(
        private readonly productUseCase: ProductUseCase
    ) { }

    public getProduct = async (req: Request, res: Response) => {
        const product = await this.productUseCase.getProduct()
        res.send({ product })
    }
    public createProduct = async ({ body }: Request, res: Response) => {
        const product = await this.productUseCase.createProduct(body)

        res.send({ product })
    }
}