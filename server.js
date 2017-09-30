var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost', { useMongoClient: true, promiseLibrary: global.Promise });


