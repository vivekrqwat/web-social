const roter=require("express").Router();
const Convo=require('../model/Convo')
roter.post("/",async(req,res)=>{
    
    try{
        const u=await new Convo({member:[req.body.senderId,req.body.recieverId]})
        const u1=await u.save();
        res.status(200).json(u1) 
    }catch(e){console.log(e)
        res.status(500).json("error")
    }
})
roter.get("/:userId",async(req,res)=>{
    try{
        console.log(req.params.userId)
        const res1=await Convo.find({member:{$in:[req.params.userId]}})
    res.status(200).json(res1)
    }catch(e){
        console.log(e)
        res.status(404).json(e)
    }
    
})
module.exports=roter