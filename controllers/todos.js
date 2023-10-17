// exports.index = function index(req, res) {

module.exports = {
    index,
};

function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll()
    });
}