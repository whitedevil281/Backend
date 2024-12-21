import mongoose  from "mongoose"
import {Todo} from "./models/todo.js"
let con = await mongoose.connect("mongodb://localhost:27017/todo")



import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todos = new Todo({des:"hey my new todo",isdone:false,days:1})
    todos.save()    
    res.send('Hello World!')
})
app.get("/app", async (req,res) => {
    let todo = await Todo.findOne({})
    console.log(todo);
    res.json({tile:todo.title,des :todo.des})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})