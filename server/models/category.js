var mongoose = require('mongoose');

var Category = mongoose.model('Category', {
    title: {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = Category;