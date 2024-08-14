const mongoose=require("mongoose")
const ConvoSchema= new mongoose.Schema({
    
member:{type:Array,
    default:[]
}
},{timestamps:true})
 const Convomodel=mongoose.model('convo',ConvoSchema);
module.exports =Convomodel;