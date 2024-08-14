const router=require("express").Router();
const user=require("../model/user")
const bcrypt=require("bcrypt")
router.get("/",(req,res)=>{
    res.end("hey its user")
})
//update
router.put("/:id",async(req,res)=>{
    const user1=await user.findById(req.params.id)
    // console.log(user1)
    !user1&&res.json("user not found")
    if(req.body.userId===req.params.id||user1.isAdmin){
        if(req.body.password){
       try{
        const salt=await bcrypt.genSalt(10);
        req.body.password=await bcrypt.hash(req.body.password,salt)

            }catch(e){return res.status(500).json(err)}

        }
        try{
            const u=await user.findByIdAndUpdate(req.params.id,{$set:req.body})
            res.status(201).json("account is updated")
        }catch(e){}

        
    }
    else{return res.status(403).json("you cannot update it")}
   
})
//delet user

router.delete("/:id",async(req,res)=>{
    const user1=user.findById(req.params.id)
    !user&&res.json("user not found")
    if(req.body.userId===req.params.id||user1.isAdmin){
       
        try{
            const u=await user.findByIdAndDelete(req.params.id,{$set:req.body})
            res.status(201).json("account is delted")
        }catch(e){}

        
    }
    else{return res.status(403).json("you cannot delete it")}
   
})
//get user
// router.get("/",async(req,res)=>{
//     try{
//         // console.log(req.params.id)
//         const u=await user.findById(req.params.id);
//         // console.log("doc",u._doc)
//         // console.log("u_",u)
//         const {password,updatedAt,...other}=u._doc
//         u&&res.json(other)
//         !u&&res.json("user is not in database")
        

//     }catch(e){console.log(e)}
// })
//follow a user
router.put("/follow/:id",async(req,res)=>{
    if(req.body.userId!== req.params.id){
        try{
            const f=await user.findById(req.params.id)
            const u=await user.findById(req.body.userId)
            if(!f.follwer.includes(req.body.userId)){
                  await f.updateOne({$push:{follwer:req.body.userId}})
                 await u.updateOne({$push:{following:req.params.id}})
                 
                
                //  console.log(u)
                  //for practice
                // await user.findByIdAndUpdate(req.params.id,{$push:{follwer:req.body.userId}})
                // await user.findByIdAndUpdate(req.body.userId,{$push:{following:req.body.userId}})
                //cannot update without using querry
                // f.follwer.push(req.body.userId)
                // console.log(f.follwer)
                  res.status(200).json("user has been followed")
            }else{
                res.status(403).json("Already followed")
            }

        }catch(e){res.status(400).json(`${e}`)}

    }else{
        res.json("u cant follow youself")
    }
})



//unfollow

router.put("/unfollow/:id",async(req,res)=>{
    if(req.body.userId!== req.params.id){
        try{
            const f=await user.findById(req.params.id)
            const u=await user.findById(req.body.userId)
            if(f.follwer.includes(req.body.userId)){
                  await f.updateOne({$pull:{follwer:req.body.userId}})
                  await u.updateOne({$pull:{following:req.params.userId}})
                  //for practice
                // await user.findByIdAndUpdate(req.params.id,{$push:{follwer:req.body.userId}})
                // await user.findByIdAndUpdate(req.body.userId,{$push:{following:req.body.userId}})
                //cannot update without using querry
                // f.follwer.push(req.body.userId)
                // console.log(f.follwer)
                  res.status(200).json("user has been unfollowed")
            }else{
                res.status(403).json("not following")
            }

        }catch(e){res.status(400).json(`${e}`)}

    }else{
        res.json("u cant follow youself")
    }
})

//get all user
router.get("/one/all",async(req,res)=>{
    try{
        
        const u=await user.find({});
        // console.log(u)
     res.status(200).json(u)

    }catch(e){console.log(e)
        res.status.json("error")
    }
})




//get by qyuery
router.get("/u1/", async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
      const user1 = userId
        ? await user.findById(userId)
        : await user.findOne({ username: username });
      const { password, updatedAt, ...other } = user1._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports=router