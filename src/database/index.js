const mongoose = require('mongoose');
const urlMongo = require('../config/configDb.json')
const url = urlMongo.linkMongoDb;

mongoose.connect(url, { useUnifiedTopology: true });
console.log('funfando');

mongoose.Promise = global.Promise;

module.exports = mongoose;