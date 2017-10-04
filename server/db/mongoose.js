var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tomislaveric', {
    useMongoClient: true
});

module.exports = { mongoose };