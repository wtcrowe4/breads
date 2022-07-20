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
}) 

//Create
breads.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    BREAD.push(req.body)
    res.redirect('/breads')
})

//New
breads.get('/new', (req, res) => {
    res.render('new')
})

//Edit
breads.get('/:arrayIndex/edit', (req, res) => {
    res.render('Edit', {
        bread: BREAD[req.params.arrayIndex],
        index: req.params.arrayIndex
    })
})

//Show
breads.get('/:arrayIndex', (req, res) => {
    if (BREAD[req.params.arrayIndex]) {
        res.render('Show', {
            bread: BREAD[req.params.arrayIndex],
            index: [req.params.arrayIndex]
        })
    } else if(!BREAD[req.params.arrayIndex]) {
        res.render('404')
    }
})

//Delete
breads.delete('/:arrayIndex', (req, res) => {
    BREAD.splice(req.params.arrayIndex, 1)
    res.status(303).redirect('/breads')
})

//Update
breads.put('/:arrayIndex', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    BREAD[req.params.arrayIndex] = req.body
    res.redirect(`/breads/${req.params.arrayIndex}`)
})

module.exports = breads