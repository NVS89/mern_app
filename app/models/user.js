import mongoose from 'mongoose';
import counter from './counter';

const { Schema } = mongoose;

/**
 * User schema definition
 */
const userSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        phone: String,
        age: Number,
        uid: Number,
    },
);

/**
 *  Auto increment user id and creating ordered id;
 */
userSchema.pre('save', function name(next) {
    const doc = this;
    counter.findByIdAndUpdate(
        { _id: 'entityId' },
        { $inc: { seq: 1 } },
        { upsert: true, new: true, setDefaultsOnInsert: true },
        (error, counter) => {
            if (error) {
                return next(error);
            }
            doc.uid = counter.seq;
            next();
        },
    );
});

export default mongoose.model('User', userSchema);