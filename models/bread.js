const mongoose = require('mongoose')
const { Schema } = mongoose

const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://www.fillmurray.com/640/360' },
  baker: {type: String, 
    enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']}
})

const Bread = mongoose.model('bread_types', breadSchema)
module.exports = Bread

