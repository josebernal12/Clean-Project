import express from "express";
import { dbConnection } from "./infrastructura/db/user.database";
import router from "./infrastructura/router/user.route";
const app = express()


app.use(express.json())

const port = 3000

app.use(router)
dbConnection()
app.listen(port, () => {
    console.log(`server USER listening to port ${port}`)
})