const express = require('express')
const breads = express.Router()
const BREAD = require('../models/bread.js')

//Index
breads.get('/', (req, res) => {
    res.render('index',
        {
            breads: BREAD
        }
    )
    //res.send(BREAD)
}) 

//Show
breads.get('/:arrayIndex', (req, res) => {
    res.send(BREAD[req.params.arrayIndex])
})

module.exports = breads