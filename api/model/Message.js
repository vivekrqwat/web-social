const mongoose=require("mongoose")
const message=new mongoose.Schema({
    conversationId: {
        type: String,
      },
    senderId:{type:"string"},
    recieverId:{type:"string"},
    text:{type:"string"}
},{timestamps:true})
const messageModel= mongoose.model('message',message)
module.exports= messageModel