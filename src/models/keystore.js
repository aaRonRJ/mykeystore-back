import mongoose from 'mongoose';

const keystoreSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    repeatPassword: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    notes: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});

const keystore = mongoose.model('keystore', keystoreSchema);

export default [
    keystoreSchema,
    keystore
];
