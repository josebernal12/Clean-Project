import { Router } from 'express'
import { ProductUseCase } from '../../application/productUserCase'
import { ProductMongo } from '../repository/mongo/product.repository'
import { ProductController } from '../controller/product.controller';

const router = Router()

const mongoRepository = new ProductMongo()

const productUseCase = new ProductUseCase(mongoRepository)

const productCtrl = new ProductController(productUseCase)

router.post('/product', productCtrl.createProduct)
router.get('/product', productCtrl.getProduct)
export default router
