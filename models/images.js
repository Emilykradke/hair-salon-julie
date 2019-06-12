const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ImagesSchema = new Schema({
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

let Images = mongoose.model('Images', ImagesSchema)

module.exports = Images;