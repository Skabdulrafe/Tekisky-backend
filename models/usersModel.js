import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobileNumber: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['seller', 'admin'], default: 'seller' },
    shopCategory: { type: String, required: true },
    shopName: { type: String, required: true },
    shopAddress: { type: String, required: true },
    GST: { type: String, required: true }
}, { timestamps: true });

const usersModel= mongoose.model('user', userSchema);

export default usersModel
