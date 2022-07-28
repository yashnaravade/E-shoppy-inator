const mongoose = require('mongoose');

const Mobile = mongoose.Schema({
    id: {type: 'number'},
    mobile_Name : {type : 'string'},
    mobile_description:{type: 'string'},
    mobile_url:{type: 'string'},
    prize:{type: 'number'},
    mobile_quantity:{type: 'number'}

    // id: req.body.id,
    // mobile_Name: req.body.mobile_Name,
    // mobile_description: req.body.mobile_description,
    // mobile_url: req.body.mobile_url,
    // mobile_prize: req.body.mobile_prize,
    // mobile_quantity: req.body.mobile_quantity

});

const model = mongoose.model('Mobile', Mobile);
module.exports = model;
