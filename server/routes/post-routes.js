const postRoutes = require('express').Router();
const Post = require('.././models/post');
const mongoose = require('.././db/mongoose');

postRoutes.post('/posts', (req, res) => {
    var post = new Post({
        title: req.body.title,
        content: req.body.content
    });

    post.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

postRoutes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

postRoutes.get('/posts', (req, res) => {
    Post.find().then((posts) => {
        res.send({ posts });
    }, (e) => {
        res.status(400).send(e);
    });
});

postRoutes.get('/posts/:id', (req, res) => {
    Post.findById(req.params.id).then((post) => {
        res.send({ post });
    })
});

module.exports = postRoutes;