const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI;

const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(connectionString, configOptions)
  .then(() => console.log('MongoDB successfully connected...'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
    Cities: require('./Cities'),
    Post: require('./Post')
}