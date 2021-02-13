const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router
  .get('/', todoController.getTodos)
  .post('/', todoController.createTodo)
  .get('/:id', todoController.getTodo)
  .patch('/:id', todoController.updateTodo)
  .delete('/:id', todoController.deleteTodo);

module.exports = router;
