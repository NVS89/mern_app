/**
 * Auto increment id schema for iterating records
 */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const CounterSchema = new Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 },
});

const counter = mongoose.model('counter', CounterSchema);

export default counter;
