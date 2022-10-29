import { Request, Response } from 'express';
import { UserUseCase } from '../../application/userUseCase';
export class userController {
    constructor(private userUseCase: UserUseCase) { }

    public getCtrl = async (req: Request, res: Response) => {
        const { uuid } = req.params
        const user = this.userUseCase.getUser(`${uuid}`)
        res.send({ user })
    }
    public inserCtrl = async ({ body }: Request, res: Response) => {
        // console.log(req.body)
        const user = await this.userUseCase.registerUser(body)
        console.log(user)
        res.send({ user })

    }
}