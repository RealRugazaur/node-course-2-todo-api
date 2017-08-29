// Запуск сервера mongoDB
// mongod.exe --dbpath /Users/Rugazaur/mongo-data

// MongoDB - NoSQL база данных.
// Данные в ней представляются не ввиде талбизц и строк,
// а в виде коллекций(массивов) документов(объектов). При этом поля этих
// объектов могут не свопадать.

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    // Заканчиваем работу если ошибка
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // СОЗДАНИЕ КОЛЛЕКЦИЙ

  // Коллекция TodoApp будет создана автоматически(если она еще не существует) как только в нее будут
  // добавлены даные.

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   // result.ops - документы, которые были добавлены
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //
  // db.collection('Users').insertOne({
  //   name: 'Andrew',
  //   age: 25,
  //   location: 'SPB'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   // result.ops - документы, которые были добавлены
  //   // Документу автоматически будет присвоен случаный 20байтный _id в виде хеша.
  //   // 4 байта (Timestamp) - время создания объекта, затем 3 - идентификатор машины, 2 - идентификатор
  //   // процесса, 3 - счетчик(случайное число).
  //   // Это удобно, когда нужно добавить дополнительный сервер, нет
  //   // нобходимости в обращению к другим серверам чтобы узнать
  //   // максимальный id и инкрементировать его, как это могло
  //   // быть с SQL базой. _id можно указать и вручную. MongoDB
  //   // используется в качетве _id не число, ObjectID.
  //   // let obj = new ObjectID();
  //   // console.log(obj);
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});

