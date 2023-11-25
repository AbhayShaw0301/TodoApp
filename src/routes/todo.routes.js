const express=require('express');
const { getTodos, createTodo, deleteTodo, updateTodo } = require('../controllers/todo.controller');
const isAuthenticated = require('../middleware/isAuthenticated');

const router=express.Router();

router.get("/todo",isAuthenticated,getTodos);
router.post("/todo",isAuthenticated,createTodo);
router.delete("/todo/:id",deleteTodo);
router.patch("/todo/:id",updateTodo);
module.exports=router;