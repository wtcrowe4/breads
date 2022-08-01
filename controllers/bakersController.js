// Dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/bakerSeedData.js')

//Seed Data
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
        .catch(err => res.send(err).render('404'))
})

//Index
baker.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then(foundBakers => res.send(foundBakers))
        .catch(err => res.send(err).render('404'))
})

//Show
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate({
            path: 'breads',
            options: {limit: 5}
        })
        .then(foundBaker => res.render('bakerShow', {baker: foundBaker}))
        .catch(err => res.send(err).render('404'))
})

//Delete
baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id)
        .then(deletedBaker => res.status(303).redirect('/breads'))
        .catch(err => res.send(err).render('404'))
})




// Export
module.exports = baker                    
