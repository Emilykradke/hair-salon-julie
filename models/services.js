const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ServicesSchema = new Schema({
    description: {
        type: String
    },
    title: {
        type: String
    }
})

let Services = mongoose.model('Services', ServicesSchema)

module.exports = Services;