const mongoose = require("mongoose");
const  {Schema}= mongoose

const feedbackSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
         type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["open" , "reviewing" , "resolved"],
        default:"open",
    },
    category:{
         type:String,
         enum:["bug" , "feature" , "accuracy" , "ux"],
    },
    priority:{
        type:String,
        enum:["low" , "medium" , "high" ],
    },
    aiVersions:{
        type:String,
    },
    attachements:{ //screenshots
        type:[String],
    },
    votes:{
        type:Number,
        default:0,
    }
}, {timestamps:true});

const Feedback = mongoose.model("feedback" , feedbackSchema);
module.exports = Feedback;