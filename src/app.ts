import express from "express";

const app = express()
import { dbConnection } from "./products/infraestructura/db/product.db";
import router from "./products/infraestructura/router/product.router";
app.use(express.json())
const port = 8080
dbConnection()

app.use(router)
app.listen(port, () => {
    console.log(`server listening to port ${port}`)
})