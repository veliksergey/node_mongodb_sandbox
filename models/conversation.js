const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Msg = new Schema({
  txt: {type: String, required: true},
  created_at: {type: Date, default: Date.now}
}, { _id: false });

const Conversation = new Schema({
  name: {type: String, required: true, unique: true},
  updated_at: {type: Date, default: Date.now},
  unread: {type: Boolean},
  msgs: [Msg]
}, { _id: false });

module.exports = mongoose.model('Conversation', Conversation);
