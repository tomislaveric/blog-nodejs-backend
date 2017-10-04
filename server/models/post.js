const mongoose = require('mongoose');

const Post = mongoose.model('Post', {
    title: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    categoryId: {
        type: Number,
        default: 0
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