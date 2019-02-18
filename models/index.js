const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/organizer', { useNewUrlParser: true } );

module.exports = {
  User: require('./user'),
  Quote: require("./quote.js"),
  Ipinfo: require("./ipinfo.js")
}
