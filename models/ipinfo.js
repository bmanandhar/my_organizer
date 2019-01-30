const mongoose = require('mongoose');
var Schema = mongoose.Schema

const ipinfoSchema = mongoose.Schema({
    city: String,
    region: String,
    user: {
        type: Schema.Types.ObjectId,  //REFERENCING :D
        ref: 'User'
      }
})

var Ipinfo = mongoose.model('IpInfo', ipinfoSchema);

module.exports = Ipinfo;
