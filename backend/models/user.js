const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = Schema({
    firstName:{
        type:String,
        required:true,
        maxLength:20,
        minLength:3,
    },
    lastName:{
        type:String,
        maxLength:20,
        minLength:3,
    },
    emailId:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        enum:["male" , "female" , "others"],
    },
    age:{
        type:Number,
        min:3,
        max:90
    },
    

} , {Timestamp:true});


const User = mongoose.model("user" , userSchema);
module.exports = User;