import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// User schema definition
const userSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        phone: String,
        age: Number,
    }
);

export default mongoose.model('User', userSchema);