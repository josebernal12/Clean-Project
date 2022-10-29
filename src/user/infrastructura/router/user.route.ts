import { Router } from 'express'
import { MongoRepositoy } from '../repository/mongo.repository'
import { UserUseCase } from '../../application/userUseCase';
import { userController } from '../controller/user.controller';

const router = Router()

const mongoUserRepository = new MongoRepositoy()

const userUseCase = new UserUseCase(mongoUserRepository)

const userCtrl = new userController(userUseCase)


router.post('/user', userCtrl.inserCtrl)
router.get('/user', userCtrl.getCtrl)
export default router