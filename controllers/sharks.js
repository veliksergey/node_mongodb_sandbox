const Shark = require('../models/sharks');

exports.create = (req, res) => {
  console.log(req.body);
  const newShark = new Shark(req.body);
  newShark.save(err => {
    if (err) {
      return res.status(404).json({message: 'Unable to save shark to database'});
    }

    res.json({message: 'added to DB'});
  });
};

exports.list = (req, res) => {
  Shark.find({}).exec((err, sharks) => {
    if (err) {
      return res.status(500).json({message: err});
    }
    res.json(sharks);
  })
};
