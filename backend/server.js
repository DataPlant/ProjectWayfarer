require('dotenv').config()
const express = require('express');
const cors = require('cors')
const cityRoutes = require('./routes/cityRoutes')

const port = process.send.PORT || 4000
const app = express()

//middleware
app.use(cors());
app.use(express.json())
app.use(cityRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})