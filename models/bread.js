const mongoose = require('mongoose')
const { Schema } = mongoose

const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://www.fillmurray.com/640/360' },
  baker: { 
    type: Schema.Types.ObjectID,
    ref: 'Baker'
    // enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']}
  }
})

//Methods
breadSchema.methods.getBakedBy = function () {
  return(`${this.name} bread was baked with love by ${this.baker}.`)}

// breadSchema.static.getOtherBreadsByBaker = function() {
//   return( mongoose.model('bread_types').find({ baker: this.baker})
//   )
// }

const Bread = mongoose.model('bread_types', breadSchema)
//console.log(Bread)
module.exports = Bread

