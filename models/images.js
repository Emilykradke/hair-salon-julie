const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ImagesSchema = new Schema({
    image: {
        type: String
    }
})

let Images = mongoose.model('Images', ImagesSchema)

module.exports = Images;