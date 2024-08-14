const roter=require("express").Router();
const message=require('../model/Message')
const convo=require("../model/Convo")
roter.post("/", async (req, res) => {
    const newMessage = new message(req.body);
  
    try {
      const savedMessage = await newMessage.save();
      res.status(200).json(savedMessage);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //get
  roter.get("/:cid",async(req,res)=>{
    try{
       const res= await message.findById(req.params.cid)
        res.status(200).json(res)
    }catch(e){
        res.status(404).json("soory")
    }
  })
  
  module.exports=roter