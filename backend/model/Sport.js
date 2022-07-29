const mongoose = require('mongoose');

const Sport = mongoose.Schema({
    id: {type: 'number'},
    sport_name : {type : 'string'},
    sport_description:{type: 'string'},
    sport_url:{type: 'string'},
    sport_prize:{type: 'number'},
    sport_quantity:{type: 'number'}

});

const model = mongoose.model('Sport', Sport);
module.exports = model;
