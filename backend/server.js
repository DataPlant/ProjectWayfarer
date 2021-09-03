require('dotenv').config()
const express = require('express');
const cors = require('cors')
const cityRoutes = require('./routes/cityRoutes')
const postRoutes = require('./routes/postRoutes')

const port = process.send.PORT || 4000
const app = express()

//middleware ifeiwjefowejofijweiof
app.use(cors());
app.use(express.json())
app.use(cityRoutes)
app.use(postRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})