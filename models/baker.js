const mongoose = require('mongoose')
const { Schema } = mongoose 
const Bread = require('./bread')

const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    }, 
    startDate: {
        type: Date,
        required: true
    },
    bio: String,
}, 
{toJSON: { virtuals: true}})

bakerSchema.virtual('breads', {
    ref: 'bread_types',
    localField: '_id',
    foreignField: 'baker'
})

const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker