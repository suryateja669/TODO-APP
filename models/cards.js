//models for cards

//import mongoose library
const mongoose=require('mongoose')

//creating the schema for the model
const cardSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true,
        trim:true,
        lower:true
    },
    category:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    }
})

//creating the model
const card=mongoose.model('Card',cardSchema)

module.exports=card

