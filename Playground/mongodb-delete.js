const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany - удалить несколько
  // result обработывать не обязательно

  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=> {
  //   // result - структура с информацией об удалении
  //   // наиболее важная строка - 1ая
  //   console.log(result);
  // });

  // deleteOne - удалить один

  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=> {
  //   console.log(result);
  // });

  // findOneAndDelete - удалить один и вернуть в переменной result

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });



  // db.close();
});