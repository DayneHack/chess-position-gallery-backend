import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    submittor: String,
    description: String,
    image: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const postMessage = mongoose.model('postMessage', postSchema);

export default postMessage;