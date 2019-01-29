const mongoose = require('mongoose');
var Schema = mongoose.Schema

const newsSchema = mongoose.Schema({
    newsContent: String,
    date: String,
    source: String,
})

var News = mongoose.model('News', newsSchema);

module.exports = News;