const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    passWord: Striing
});

const Todo = mongoose.model('User', UserSchema);

module.exports = User;
