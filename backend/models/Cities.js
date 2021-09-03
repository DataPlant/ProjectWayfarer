const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    cityname: String,
    country: String,
    headerimg: String,
    posts: [{ type:mongoose.Types.ObjectId, ref: 'Post'}]
})

const City = mongoose.model('City', citySchema);

module.exports = City;

////testcopies for postman

    // "cityname": "String",
    // "country": "String",
    // "title": "String",
    // "body": "String",
    // "headerimg": "String",