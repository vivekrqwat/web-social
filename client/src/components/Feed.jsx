import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import Card1 from './Card1'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { Context } from './Context/Context'
export default function Feed() {
  const{uname}=useParams();
  console.log(uname,"heheh")
    const{state,dispatch}=useContext(Context)
  const [post,setpost]=useState([])
  // axios.defaults.baseURL = `http://localhost:8000/api`
//  const a= axios.defaults.baseURL;
//  console.log(a)
  useEffect(()=>{
const re =async()=>{
  const res = uname ?await axios.get(` /api/post/profile/${uname}`):await axios.get(` /api/post/timeline/${state.user._id}`);
console.log("res7",res)
setpost(res.data)
}
return()=>{re()}

  },[])
  
console.log(post.likes)
  return (
   <Box flex={2}
 
    // sx={{gap:"10px"}}
    
  
  >
   
   { 
    (uname===state.user.uname)||!uname?  <Card1></Card1>:<div></div>
   }
 
   {post.map((i)=>{
    return(<Post desc={i.desc} likes={i.likes.length}  uid={i.userId} time={i.createdAt} img={i.img} id={i._id} likeA={i.likes}></Post>)
   })}
   
   

   
   
   </Box>
  )
}
