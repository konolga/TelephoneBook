const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({

name: {type: String, required: true},
telephone: {
  type: String,
  required: [true, 'Phone number required']
}
});

module.exports = mongoose.model('Contact', contactSchema)
