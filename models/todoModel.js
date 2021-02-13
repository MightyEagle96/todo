const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Please insert a todo title'] },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
