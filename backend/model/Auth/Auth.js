const mongoose = require('mongoose');

const Auth = new mongoose.Schema({
    name : String,
    email: String,
    password: String,
    mobile:Number
});

const model = mongoose.model('auth', Auth) // stucture
module.exports = model;