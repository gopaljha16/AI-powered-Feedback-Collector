const mongoose = require("mongoose");
const { Schema } = mongoose


const commentSchema = new Schema({
    feedback: {
        type: Schema.Types.ObjectId,
        ref: "feedback",
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    isAdminResponse:{
        type:Boolean,
    }
}, {timestamps:true})

const Comment = mongoose.model("comment" , commentSchema);
module.exports = Comment;
