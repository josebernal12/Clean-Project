import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,

    },
    stock: {
        type: Number,
        // required: [true, "el correo es obligatorio"],
        // unique: true,
    },


});



export default model("product", productSchema);
