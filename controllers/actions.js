const asyncHandler = require('express-async-handler');
const Todo = require("../models/Todo");
const getAll1 = asyncHandler(async(req,res) => {
    const allTodo = await Todo.find();
    res.render("index", {todo: allTodo})
})

const getAll = asyncHandler(async (req, res) => {
    const allTodo = await Todo.find();
    res.render("index", { todo: allTodo });
  });



const addnewTodo = asyncHandler(async (req,res) => {
    const { todo } = req.body;
    const newTodo = new Todo({todo});

    // upload todo to db
    newTodo.save().then(()=> {
        console.log("added todo");
        res.redirect('/');
    }).catch((err)=>console.log(err));
})

const deleteTodo = asyncHandler((req,res)=> {
    const { _id } = req.params;
    Todo.deleteOne({ _id})
    .then(()=>{
        console.log("deleted todo");
        res.redirect('/');
    }).catch((err)=>console.log(err));
})

module.exports = { getAll, addnewTodo, deleteTodo};