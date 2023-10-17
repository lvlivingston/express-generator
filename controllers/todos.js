const Todo = require('../models/todo');

module.exports = {
    index,
    show
};

function show(req, res) {
    res.render('todos/show', {
        todo: Todo.getOne(req.params.id),
    });
}

// exports.index = function index(req, res) {
function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll(),
    });
}