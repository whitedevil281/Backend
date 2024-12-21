
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {type:String, require:true,default:"hey"},
    des:String,
    isdone : Boolean,
    days: Number
  });

export const Todo = mongoose.model('Todo', todoSchema);


