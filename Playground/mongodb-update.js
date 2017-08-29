const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  // findOneAndUpdate(filter, update, options, callback)
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("59a56eb7130f190cd83b64a1")
  }, {
    // В MonogoDB есть определенный набор update operators, $set один их них,
    // ищи их все в документации
    $set: {
      name: 'Somebody',
    },
    $inc: {
      age : 1
    }
  }, {
    // Возвращет не оригинальный(по умолчанию), а обновленный документ
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  }).then((result) => {
    console.log(result);
  });

});