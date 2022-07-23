const express = require('express')
const breads = express.Router()
const BREAD = require('../models/bread.js')

//Index
breads.get('/', (req, res) => {
    BREAD.find()
        .then(foundBreads => {
            res.render('index',
                {
                    breads: foundBreads, 
                    title: 'Index Page'
                }
            )
        })
}) 

//Create
breads.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.image) {
        req.body.image = undefined
    }
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    BREAD.create(req.body)
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
breads.get('/:id', (req, res) => {
    BREAD.findById(req.params.id)
        .then(foundBread => res.render('Show', { bread: foundBread }))
        .catch(error => res.render('404'))
})
//     if (BREAD[req.params.arrayIndex]) {
//         res.render('Show', {
//             bread: BREAD[req.params.arrayIndex],
//             index: [req.params.arrayIndex]
//         })
//     } else if(!BREAD[req.params.arrayIndex]) {
//         res.render('404')
//     }
// })

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