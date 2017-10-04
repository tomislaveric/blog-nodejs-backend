var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var Post = require('./models/post');

var app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Started on port 3000');
});

app.post('/posts', (req, res) => {
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

app.get('/posts', (req, res) => {
    Post.find().then((posts) => {
        res.send({ posts });
    }, (e) => {
        res.status(400).send(e);
    });
});