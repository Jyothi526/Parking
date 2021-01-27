const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Issue = new Schema({
    mail : {
        type : String
    },
    name : {
        type : String
    },
    vehicle_name : {
        type : String
    },
    status : {
        type : String,
        default : 'Open'
    }
});

module.exports=mongoose.model('Issue',Issue);
