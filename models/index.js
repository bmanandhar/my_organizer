const mongoose = require('mongoose');
const User = require('./user');

// models/index.js
// require runs the code from the given file and returns its exports
const T = require('./user');
// NEW LINE:
exports.User = User;