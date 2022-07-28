const mongoose = require('mongoose');

const Mobile = mongoose.Schema({
    id: {type: 'number'},
    mobile_Name : {type : 'string'},
    mobile_description:{type: 'string'},
    mobile_url:{type: 'string'},
    mobile_prize:{type: 'number'},
    mobile_quantity:{type: 'number'}

});

const model = mongoose.model('Mobile', Mobile);
module.exports = model;
