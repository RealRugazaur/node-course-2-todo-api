let {mongoose} = require('../db/mongoose');

// 2 аргумет - Schema с валидацией
let Todo = mongoose.model('Todo', {
  text: {
    type: String, // Помни, что в mongoose есть type casting, так что
    // в поле text все еще можно передавать числа или Boolean, они
    // будут преобразованы в String
    required: true,
    minlength: 1,
    trim: true // удалить пробелы вначале и в конце
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
  // _id добавлять не обязательно, добавиться афтоматически.
  // Также автоматически добавиться поле __v, отвечающее
  // за мониторинг версий модели.(?)

});

// let newTodo2 = new Todo({
//   text: 'Cook dinner',
//   completed: true,
//   completedAt: 123
// });
//
// newTodo2.save().then((doc)=>{
//   console.log('Saved todo2 :', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

// let newTodo2 = new Todo({text: ' Edit this video  '});
//
// newTodo2.save().then((doc)=>{
//   console.log('Saved todo2 :', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

module.exports = {Todo};