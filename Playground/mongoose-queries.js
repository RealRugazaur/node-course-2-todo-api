const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Я затетил, что idшники постоянно меняются, так что
// через какое то время пример становиться не рабочим.
let id = "59a827ec8db6d1ec0af22e41";

// если id будет содержать неверное количество символов
if (ObjectID.isValid(id)) {
  console.log('Id not valid');
}

Todo.find({
  _id: id // Здесь строка с id будет автоматически преобразована в ObjectId
}).then((todos) => {
  console.log('Todos', todos);
}).catch((e) => console.log(e));;

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
}).catch((e) => console.log(e));;

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by id', todo);
}).catch((e) => console.log(e));

let userid = "59a5c19b5b76c1c804325a38";

User.findById(userid).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User by id', user);
}).catch((e) => console.log(e));