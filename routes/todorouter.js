const express = require('express')
const router = express.Router()

const {createTodo, getallTodo, getTodo, deleteTodo, updateTodo} = require('../controllers/todocontroller')


router.post('/todo', createTodo)
router.get('/todo', getallTodo)
router.get('/todo/:id', getTodo);
router.delete('/todo/:id', deleteTodo)
router.patch('/todo/:id', updateTodo)


module.exports = router;