const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AboutSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
})

let About = mongoose.model('About', AboutSchema)

module.exports = About;