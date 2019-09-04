const Conversation = require('../models/conversation');

exports.list = (req, res) => {
  Conversation.find({}).exec((err, conversations) => {
    if (err) {
      return res.status(500).json({message: err});
    }

    res.json(conversations);
  })
};

exports.create = (req, res) => {
  const name = req.body.name;
  const msg = req.body.msg;
  const testo = {txt: 'this is testo msg'};
  let newConversation;

  Conversation.findOne({name: name}).exec((err, conversation) => {
    if (err) {
      return res.status(500).json({message: err});
    }

    if (!conversation) {
       newConversation = new Conversation({name});
    } else {
      newConversation = conversation;
    }

    newConversation.unread = true;
    newConversation.updated_at = new Date();
    newConversation.msgs.push({txt: msg});
    newConversation.save();

    res.json({message: 'updated?'});

  });
};
