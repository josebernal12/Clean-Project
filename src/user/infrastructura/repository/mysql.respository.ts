import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository';
import userModel from '../model/user.schema'
export class MysqlRepository implements UserRepository {
    async findUserById(uuid: string): Promise<any> {
        const user = await userModel.findOne({ uuid })
        return user
    }
    async registerUser(user: UserEntity): Promise<any> {
        const userCreate = await userModel.create({ user })
        return userCreate
    }
    async listUser(): Promise<any> {
       const user = await userModel.find()
       return user
    }

}