const express = require('express')
const breads = express.Router()
const BREAD = require('../models/bread.js')

//Index
breads.get('/', (req, res) => {
    res.render('index',
        {
            breads: BREAD, 
            title: 'Index Page'
        }
    )
    //res.send(BREAD)
}) 

//Show
breads.get('/:arrayIndex', (req, res) => {
    if (BREAD[req.params.arrayIndex]) {
        res.render('Show', {
            bread: BREAD[req.params.arrayIndex],
            index: [req.params.arrayIndex]
        })
    } else if(!BREAD[req.params.arrayIndex]) {
        res.send('404')
    }
    
    
})

module.exports = breads