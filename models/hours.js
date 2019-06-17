const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let HoursSchema = new Schema({
    day: {
        type: String
    },
    open: {
        type: String
    },
    close: {
        type: String
    }
})  

let Hours = mongoose.model('Hours', HoursSchema)

module.exports = Hours;