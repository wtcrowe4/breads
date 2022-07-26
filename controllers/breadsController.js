const express = require('express')
const breads = express.Router()
const BREAD = require('../models/bread.js')
const seedData = require('../models/seedData.js')
const Baker = require('../models/baker.js')

//Index 
breads.get('/', (req, res) => {
    BREAD.find()
        .populate('baker')
        .then(foundBreads => res.render('Index',{ breads: foundBreads, title: 'Index Page' }))
}) 

//Create
breads.post('/', (req, res) => {
    if(!req.body.image) {req.body.image = undefined}
    if(req.body.hasGluten === 'on') {req.body.hasGluten = 'true'} 
    else {req.body.hasGluten = 'false'}
    // add a .catch for errors creating a bread
    BREAD.create(req.body)
    res.redirect('/breads')
})

//New
breads.get('/new', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            res.render('new', {bakers: foundBakers})
        })
    
})

//Seed 
breads.get('/data/seed', (req, res) => {
    BREAD.insertMany(seedData)
        .then(createdBreads => res.redirect('/breads'))
})

//Edit
breads.get('/:id/edit', (req, res) => {
   BREAD.findById(req.params.id)
    .then(foundBread => res.render('Edit', {bread: foundBread})) 
})

//Show
breads.get('/:id', (req, res) => {
    BREAD.findById(req.params.id)
        .populate('baker')
        .then(foundBread => {
            // const otherBreads = foundBread.getOtherBreadsByBaker()
            // console.log({otherBreads})
            res.render('Show', { bread: foundBread })
        })
        .catch(error => res.render('404'))
})

//Delete
breads.delete('/:id', (req, res) => {
    BREAD.findByIdAndDelete(req.params.id)
        .then(deletedBread => res.status(303).redirect('/breads'))
})

//Update
breads.put('/:id', (req, res) => {
    if(req.body.hasGluten === 'on') {req.body.hasGluten = true} 
    else {req.body.hasGluten = false}
    BREAD.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedBread => res.redirect(`/breads/${req.params.id}`))
})

module.exports = breads