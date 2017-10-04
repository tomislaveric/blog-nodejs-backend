var mongoose = require('mongoose');

var Post = mongoose.model('Post', {
    title: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: 'Tomislav Eric'
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Post;