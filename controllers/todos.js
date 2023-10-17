const Todo = require('../models/todo');

module.exports = {
    index,
};

// exports.index = function index(req, res) {
function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll()
    });
}