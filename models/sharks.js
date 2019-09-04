const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Shark = new Schema({
  name: {type: String, require: true},
  character: {type: String, required: true}
});

module.exports = mongoose.model('Shark', Shark);
