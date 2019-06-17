const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ServicesSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
})

let Services = mongoose.model('Services', ServicesSchema)

module.exports = Services;