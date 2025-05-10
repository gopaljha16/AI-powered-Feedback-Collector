const mongoose = require("mongoose");
const  {Schema}= mongoose

const aiInterationSchema = new Schema({
    userId:{
      type:Schema.Types.ObjectId,
      ref:"user",
      required:true,
    },
    input:{
        type:String,
        required:true,
    },
    output:{
        type:String,
        required:true,
    },
    modelUsed:{
        type:String,
        required:true,
    },
    parameters:{
        type:Object,
    },
    feedbackRef:{
        type:Schema.Types.ObjectId,
        ref:"feedback",
        required:true,
    }
} , {timestamps:true});

const AiIntegration = mongoose.model("aiModel" , aiInterationSchema);
module.exports = AiIntegration;