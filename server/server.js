let express = require('express');
let bodyParser = require('body-parser');
// body-parser - позволяет автоматически преобразовывать json
// в
let {ObjectID} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)){
    console.log('Not valid', id);
    return res.status(404).send();
  }

  Todo.findById(id).then((result) => {
    if (!(result)) {
      console.log('No such id', id);
      return res.status(404).send();
    }
    console.log('Return id ', id);
    return res.status(200).send({result});
  },(e) => {
    res.status(400).send(e);
  });
});


app.listen(3000, () => {
  console.log('Started on port 3000');
});



module.exports = {
  app
};