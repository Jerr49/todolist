const todo = require("../models/todo")

const createTodo = async (req, res)=>{
    const {title, body} = req.body

    try {
        const Todo = await todo.create({title, body})  
        res.status(201).json({msg: 'successfully created', Todo})
    } catch (error) {
        res.status(500).json({msg: 'Todo not created'})
    }
}
const getallTodo = async (req, res)=>{
    try {
      const Todo = await todo.find()
      res.status(201).json({msg: 'successful', Todo})
    } catch (error) {
        res.status(500).json({msg: "can't get all Todo"})
    }
}

const getTodo = async (req, res)=>{
    const { id } = req.params
    try {
        const Todo = await todo.findById(id)
            res.status(201).json({msg: 'successful', Todo})
    } catch (error) {
        console.log(err);
    }
}

const deleteTodo = async(req, res)=>{
    const { id } = req.params

    try {
        const Todo = await todo.findByIdAndDelete(id)
            res.status(201).json({msg: 'delete successful', Todo}) 
    } catch (error) {
        console.log(err)
    }

}

const updateTodo = async(req, res)=>{
    const {id} = req.params
    try {
        const existTodo = await users.findById(id)
        const updateTodo = await findByIdAndUpdate(existTodo, req.boody, {new: true,  runValidators: true})
        res.status(202).json({data: updateTodo})
    } catch (error) {
        
    }
}

module.exports = {createTodo, getallTodo, getTodo, deleteTodo, updateTodo}