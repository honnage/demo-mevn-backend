import mongoose, { Schema } from 'mongoose';
const userShema = new Schema({
    role: { type: String, maxlength: 30, required: true },
    username: { type: String, maxlength: 50, unique: true, required: true },
    type: { type: String, maxlength: 20 },
    document: { type: String, maxlength: 20 },
    address: { type: String, maxlength: 70 },
    phone: { type: String, maxlength: 20 },
    email: { type: String, maxlength: 50, unique: true, required: true },
    password: { type: String, maxlength: 64, required: true },
    status: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
});

const Users = mongoose.model('users', userShema);
export default Users;