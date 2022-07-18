//Dependancies
const express = require('express')
const dotenv = require('dotenv').config()

//Config
const PORT = process.env.PORT
const app = express()

//Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Middleware
app.use(express.static('public'))

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to my bread app.')
})

//Breads
const breadsController = require('./controllers/breadsController.js')
app.use('/breads', breadsController)

//404 Wildcard Route
app.get('*', (req, res) => {
    res.send('404')
})

//Listen
app.listen(PORT, () => {console.log(`Listening on ${PORT}`)})
