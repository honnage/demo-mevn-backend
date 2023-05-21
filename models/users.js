import mongoose, { Schema } from "mongoose"

const userShema = new Schema({
    username: {
        type: String,
        maxlength: 50,
        unique: true,
        required: true
    },
    password: {
        type: Number,
        maxlength: 64,
        required: true
    },
    role: {
        type: String,
        maxlength: 30,
        required: true
    },
    type: {
        type: String,
        maxlength: 20,
    },
    address: {
        type: String,
        maxlength: 70,
    },
    phone: {
        type: String,
        maxlength: 20,
    },
    email: {
        type: String,
        maxlength: 50,
        unique: true,
        required: true
    },
    status: {
        type: Number,
        default: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Users = mongoose.model('users', userShema)

export default Users