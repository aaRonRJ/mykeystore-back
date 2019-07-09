import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    store: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'keystore'
        }
    ]
});

userSchema.pre('save', () => {
    const hashedPassword = bcrypt.hashSync(this.password, 12);
    this.password = hashedPassword;
});

const user = mongoose.model('user', userSchema);

export default user;
