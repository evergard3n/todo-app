const router = require('express').Router();
const Todo = require("../models/Todo");
const { addnewTodo, deleteTodo } = require("../controllers/actions")
router.post("/add/todo", addnewTodo)
.get("/delete/todo/:_id", deleteTodo)
module.exports = router;