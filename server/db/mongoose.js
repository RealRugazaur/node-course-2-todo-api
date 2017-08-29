// mongoose - ORM, упрощает работу с mongoDB,
// позволяет к примеру назначить валидацию и указывать ограничения для полей документов.
let mongoose = require('mongoose');



// К слову.
// Promise изначально была библиотекой, используемой
// mongoose, а затем перекачевала в язык.
// Поэтому мы назначаем promise вручную :
mongoose.Promise = global.Promise;

// В mongoose нет необходимости назначать callback
// для connect, mongoose не сделает все сам, он не
// позволит вызывать операции обнровления пока
// не произойдет окончательное подключение.
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};

