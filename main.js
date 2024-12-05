const express = require('express')
const app = express()
const port = 3000
const charactersRoutes = require('./routes/characters')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/characters', charactersRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})