const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // курсор - указатель на документы.
  let cursor = db.collection('Todos').find();


  // Колво записей
  db.collection('Users').find({name:'Andrew'}).count().then((count)=> {
    console.log('Todos count : ' + count);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // Запись с уазанным Id

  // db.collection('Todos').find({_id:new ObjectId("59a58a097cbd6be2f49437b2")}).toArray().then((docs)=> {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // Записи с указанными свойствами

  // db.collection('Todos').find({completed:false}).toArray().then((docs)=> {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // Все записи.
  // Вызваем toArray, потому что возвращается курсор, а не массив.
  // db.collection('Todos').find().toArray().then((docs)=> {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.close();
});