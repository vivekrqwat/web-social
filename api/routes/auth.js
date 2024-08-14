const auth=require("express").Router();
const user=require("../model/user.js");
const bcrypt=require("bcrypt");
auth.post("/register",async (req,res)=>{
    try{
        const salt=await bcrypt.genSalt(10);
        const hashpassword=await bcrypt.hash(req.body.password,salt);
        req.body.password=hashpassword

        const user1= await new user(req.body)
        const u=await user1.save()
        console.log("u is",u)
        res.status(200).json(u)
    }catch(e){console.log(e)}
   
})
//login
auth.post("/login",async(req,res)=>{
    try{
        const u=await user.findOne({email:req.body.email})
        !u&&res.status(404).json("user not found")
        const validp=await bcrypt.compare(req.body.password,u.password)
        console.log(validp)
        console.log(req.body.password," ",u.password)
        !validp&&res.status(200).json("wrong password")
        res.status(200). json(u)
    }catch(e){console.log(e)}
})


module.exports=auth