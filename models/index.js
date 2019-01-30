const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/organizer', { useNewUrlParser: true } );

// models/index.js
// require runs the code from the given file and returns its exports
const User = require('./user');
// NEW LINE:
exports.User = User;

module.exports.User = require('./user')

module.exports.Quote = require("./quote.js");
module.exports.Quote = require("./ipinfo.js");

mongoose.connect("mongodb://localhost:3000/home"); 
mongoose.connect("mongodb://localhost:3000/news"); 
mongoose.connect("mongodb://localhost:3000/weather"); 
mongoose.connect("mongodb://localhost:3000/ipinfo"); 