import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,

    },
    email: {
        type: String,
        // required: [true, "el correo es obligatorio"],
        // unique: true,
    },


});



export default model("user", userSchema);
