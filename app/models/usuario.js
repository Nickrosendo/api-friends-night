const mongoose = require('mongoose');

const schema = mongoose.Schema({
  
  usuario: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  }
})

mongoose.model('Usuario', schema);