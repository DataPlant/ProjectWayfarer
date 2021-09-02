const router = require('express').Router();
const db = require('../models/index.js');


router.get('/', (req, res) => {
    db.Cities.find({}, (err, foundCity) => {
        if (err) return console.log(err);
        res.json(foundCity);
    })
})

module.exports = router;