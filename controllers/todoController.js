const Todo = require('../models/todoModel');

// get todos
exports.getTodos = async (req, res, next) => {
  const todos = await Todo.find();
  res.status(200).json({ status: 'success', todos, results: todos.length });
};

//create todo
exports.createTodo = async (req, res, next) => {
  await Todo.create(req.body);
  res.status(201).json({ status: 'created' });
};

// get todo
exports.getTodo = async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);
  res.status(200).json({ status: 'success', todo });
};

// update todo
exports.updateTodo = async (req, res, next) => {
  await Todo.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({ message: 'update successful' });
};

//delete todo
exports.deleteTodo = async (req, res, next) => {
  await Todo.findByIdAndRemove(req.params.id);
  res.status(204).json({});
};
