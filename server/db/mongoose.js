var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tomislaveric', {
    useMongoClient: true
});

module.exports = { mongoose };