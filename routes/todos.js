var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

// // This is a request to GET /users
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// All actual paths start with "/todos"

// GET /todos
router.get('/');

module.exports = router;