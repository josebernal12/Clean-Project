import mongoose from 'mongoose'

const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/ts-new2')
        console.log('Database is connected')
    } catch (error) {
        console.log(error)
    }

}

export { dbConnection }