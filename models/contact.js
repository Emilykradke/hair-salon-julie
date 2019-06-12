const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ContactSchema = new Schema({
    phone: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    suite: {
        type: String
    }
})

let Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact;