const express = require('express')
const breads = express.Router()
const BREAD = require('../models/bread.js')
const seedData = require('../models/seedData.js')
const Baker = require('../models/baker.js')

//Index 
breads.get('/', async (req, res) => {
    const foundBakers = await Baker.find()
    const foundBreads = await BREAD.find().limit(10).populate('baker')
    res.render('Index', { 
        breads: foundBreads,
        bakers: foundBakers,
        title: 'Index Page' }
    ) 
})
//     Baker.find()
//     .then(foundBakers => {
//         BREAD.find()
//         .populate('baker')
//         .then(foundBreads => {
//             res.render('index', { 
//                 breads: foundBreads,
//                 bakers: foundBakers,
//                 title: 'Index Page' }
//             )
//         }).catch(err => res.send(err))

//     })
//     .catch(err => res.send(err))
// }) 

//Create
breads.post('/', (req, res) => {
    if(!req.body.image) {req.body.image = undefined}
    if(req.body.hasGluten === 'on') {req.body.hasGluten = 'true'} 
    else {req.body.hasGluten = 'false'}
    BREAD.create(req.body)
        .then(newBread => res.redirect('/breads'))
        .catch(err => res.send(err).render('404'))
})

//New
breads.get('/new', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            res.render('new', {bakers: foundBakers})
        })
        .catch(err => res.send(err).render('404'))
    
})

//Seed 
breads.get('/data/seed', (req, res) => {
    BREAD.insertMany(seedData)
        .then(createdBreads => res.redirect('/breads'))
        .catch(err => res.send(err).render('404'))
})

//Edit
breads.get('/:id/edit', (req, res) => {
   Baker.find()
    .then(foundBakers => {
        BREAD.findById(req.params.id)
            .then(foundBread => { 
                res.render('Edit', {
                    bread: foundBread,
                    bakers: foundBakers
                    })
            })
            .catch(err => res.send(err).render('404')) 
    })
    .catch(err => res.send(err).render('404'))
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
        .catch(err => res.send(err).render('404'))
})

//Delete
breads.delete('/:id', (req, res) => {
    BREAD.findByIdAndDelete(req.params.id)
        .then(deletedBread => res.status(303).redirect('/breads'))
        .catch(err => res.send(err).render('404'))
})

//Update
breads.put('/:id', (req, res) => {
    if(req.body.hasGluten === 'on') {req.body.hasGluten = true} 
    else {req.body.hasGluten = false}
    BREAD.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedBread => res.redirect(`/breads/${req.params.id}`))
        .catch(err => res.send(err).render('404'))
})

module.exports = breads