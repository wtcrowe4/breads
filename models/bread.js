const mongoose = require('mongoose')
const { Schema } = mongoose

const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://www.fillmurray.com/640/360' }
})

const Bread = mongoose.model('bread_types', breadSchema)
module.exports = Bread

