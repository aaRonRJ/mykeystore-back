var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

var categoryModel = mongoose.model('Category', categorySchema);

module.exports = categoryModel;
