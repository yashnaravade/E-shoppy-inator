const mongoose = require('mongoose');

const Book = mongoose.Schema({
    id: {type: 'number'},
    book_name : {type : 'string'},
    book_description:{type: 'string'},
    book_url:{type: 'string'},
    book_prize:{type: 'number'},
    book_quantity:{type: 'number'}

});

const model = mongoose.model('Book', Book);
module.exports = model;
