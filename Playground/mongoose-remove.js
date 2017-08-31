const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// удаляем все
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Удаляем один элемент и получаем его в качестве возвращаемого значения.
// Todo.findOneAndRemove();
// Todo.findByIdAndRemove();

// Todo.findByIdAndRemove({_id: '59a87210e98300e3c0e6853a'}).then((todo) => {
//   console.log(todo);
// });
//
// Todo.findByIdAndRemove('59a87210e98300e3c0e6853a').then((todo) => {
//   console.log(todo);
// });