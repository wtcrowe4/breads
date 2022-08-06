//Dependancies
const express = require('express')
const dotenv = require('dotenv').config()
const methodOverride = require('method-override')
const mongoose = require('mongoose')

//Config
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
const app = express()


//Database
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => {console.log(`Mongo connected: ${MONGO_URI}`)})

//Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to my Bread App')
})

//Breads
const breadsController = require('./controllers/breadsController.js')
app.use('/breads', breadsController)

//Bakers
const bakersController = require('./controllers/bakersController.js')
app.use('/bakers', bakersController)

//404 Wildcard Route
app.get('*', (req, res) => {
    res.send('404')
})

//Listen
app.listen(PORT, () => {console.log(`Listening on ${PORT}`)})
