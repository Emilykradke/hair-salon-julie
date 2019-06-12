const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AboutSchema = new Schema({
    description: {
        type: String
    }
})

let About = mongoose.model('About', AboutSchema)

module.exports = About;