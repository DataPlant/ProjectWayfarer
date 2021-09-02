const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    cityname: String,
    country: String,
    title: String,
    body: String,
    headerimg: String,
})

const City = mongoose.model('Game', CitySchema);

module.exports = Game;