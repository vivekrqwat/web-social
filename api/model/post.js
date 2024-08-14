const { default: mongoose } = require("mongoose")

const PostSchema=new mongoose.Schema({

userId:{type:String,require:true},
desc:{type:String,max:500},
img:{type:String},
likes:{type:Array,default:[]}
},{timestamps:true})

const postmodel= mongoose.model("post",PostSchema);
module.exports=postmodel