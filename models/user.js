var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

var keystoreSchema = new Schema({
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
    notes: String,
    category: categorySchema
});

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    store: {
        type: [keystoreSchema]
    }
});

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;
