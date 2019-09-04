const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

mongo.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Connected');

  const db = client.db('umbrella');
  const collection = db.collection('employees');

  /*collection.insertOne({name: 'Roger'}, (err, result) => {
  });*/

  collection.findOne({name: 'Roger'}, (err, item) => {
    console.log(item);
  });

  collection.deleteOne({name: 'Togo2'}, (err, item) => {
    // console.log(item);
  });

  client.close();

});
