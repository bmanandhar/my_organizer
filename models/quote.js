const mongoose = require('mongoose');
var Schema = mongoose.Schema

const quoteSchema = Schema({
    quote: {type:String},
    author: String,
    link: String,
    user: {
        type: Schema.Types.ObjectId,  //REFERENCING :D
        ref: 'User'
      }
})

var Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
