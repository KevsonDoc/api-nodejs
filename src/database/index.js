const mongoose = require('mongoose');
const url = 'mongodb+srv://APIdb:20027477FLa@api-w0vfx.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url, { useUnifiedTopology: true });
console.log('funfando');

mongoose.Promise = global.Promise;

module.exports = mongoose;