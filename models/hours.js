const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let HoursSchema = new Schema({
    title: {
        type: String
    },
    sunday: {
        type: String
    },
    monday: {
        type: String
    },
    tuesday: {
        type: String
    },
    wednesday: {
        type: String
    },
    thursday: {
        type: String
    },
    friday: {
        type: String
    },
    saturday: {
        type: String
    }
})

let Hours = mongoose.model('Hours', HoursSchema)

module.exports = Hours;