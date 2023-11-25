const express=require('express');
const { getTodos, createTodo, deleteTodo, updateTodo } = require('../controllers/todo.controller');

const router=express.Router();

router.get("/todo",getTodos);
router.post("/todo",createTodo);
router.delete("/todo/:id",deleteTodo);
router.patch("/todo/:id",updateTodo);
module.exports=router;