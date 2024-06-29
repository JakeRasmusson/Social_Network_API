const express = require('express')
const routes = require('./controllers')
const db = require('./config/connection')
const app = express()
const PORT = process.env.PORT || 3001

app.use(routes)

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`)
    })
})