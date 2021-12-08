const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const routes = require('./routes.js');

app.use('/', routes)

app.listen(port, () => {
    console.log(`listening on ${port}`)
})


