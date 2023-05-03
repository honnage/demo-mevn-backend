import mongoose, { Schema } from "mongoose"

const categoriaShema = new Schema({
    number: {
        type: String,
        maxlength: 50,
        unique: true,
        required: true
    },
    description: {
        type: String,
        maxlength: 255,
    },
    status: {
        type: Number,
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Categoria = mongoose.model('categoria', categoriaShema)

export default Categoria