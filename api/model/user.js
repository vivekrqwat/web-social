const { default: mongoose } = require("mongoose")

const userSchema=new mongoose.Schema({
uname:{
    type:String,require:true
},


email:{
    type:String,require:true,
}
,
password:{
    type:String,require:true,min:6
},
coverpic:{
    type:String,default:""
},
profilepic:{
    type:String,default:""
},
follwer:{
    type:Array,default:[]
},
following:{type:Array,default:[]},
isAdmin:{type:Boolean,default:false},
desc:{type:String,max:50},
city:{type:String,nax:50},
from:{type:String,max:50},
relationship:{type:Number,enum:[1,2,3]}




},{timestamps:true})

const usermodel= mongoose.model("user",userSchema);
module.exports=usermodel