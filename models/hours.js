const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let HoursSchema = new Schema({
    active: {
        type: Boolean,
        default: true
    },
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