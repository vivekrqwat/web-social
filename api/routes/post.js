const post=require("express").Router();
const p=require("../model/post");
const user=require("../model/user")
const { findById, findByIdAndUpdate } = require("../model/user");
//create
post.post("/",async(req,res)=>{
    const newpost=await  new p(req.body)
    try{
        const savepost=await newpost.save()
        res.status(200).json(savepost)
    }catch(e){
        res.status(400).json(e)
    }
})
//update
post.put("/update/:id",async(req,res)=>{
try{
   
    const p1=await p.findById(req.params.id)
   
    if(p1.userId===req.body.userId){
        // console.log(req.body)
        await p.updateOne({$set:req.body})
        res.json("updated")
    }else{res.json("sorry")}
}catch(e){console.log(e)
    res.status(400).json(`${e}`)}
})
//deleted

post.delete("/delete/:id",async(req,res)=>{
    try{
       
        const p1=await p.findById(req.params.id)
       
        if(p1.userId===req.body.userId){
            // console.log(req.body)
            await p1.deleteOne()
            res.status(200).json("deleted")
        }else{res.status(400).json("sorry cannot delete")}
    }catch(e){console.log(e)
        res.status(400).json(`${e}`)}
    })
    //post like
    post.put("/like/:id",async(req,res)=>{
        try{
            const p1=await p.findById(req.params.id);
            console.log(p1)
            // console.log(req.body.userId)
            if(!p1.likes.includes(req.body.userId)){
                await p1.updateOne({$push:{likes:req.body.userId}})
                res.status(200).json("post has been like")
            }else{
                await p1.updateOne({$pull:{likes:req.body.userId}})
                res.status(200).json("post has been dislike")
            }
        }catch(e){res.status(400).json(`${e}`)}
    })
//timeline
post.get("/timeline/:userId",async(req,res)=>{
    try{
        const cuser=await user.findById(req.params.userId)
        // console.log("cuser",cuser._id)
        const upost=await p.find({userId:cuser._id})
        const friend= await Promise.all(
            cuser.following.map((fp)=>{
                
               return p.find({userId:fp})
                
            })
            
        );
        // console.log("friend",friend)
        const p1=await p.find({userId:req.body.userId})
        // console.log("p1:",upost," ",friend)
        res.status(200).json(upost.concat(...friend))
    }catch(e){res.status(400).json(`${e}`)}
    
})

//user post
post.get("/profile/:uname",async(req,res)=>{
    try{
       const user1=await user.findOne({uname:req.params.uname})
       const p1=await p.find({userId:user1._id})
       res.status(200).json(p1)
    }catch(e){res.status(400).json(`${e}`)}
    
})


module.exports=post