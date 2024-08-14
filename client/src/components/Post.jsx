import { Checkbox,Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Icon, IconButton, Typography, styled } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import axios from "axios"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useContext, useEffect, useState } from 'react'
import {format} from "timeago.js"
import { Link } from 'react-router-dom';
import { Context } from './Context/Context';

export default function Post({desc,likes,uid,time,img,id,likeA}) {
  const [user,setuser]=useState({});
  const{state,dispatch}=useContext(Context)
  const pf=(import.meta.env).VITE_API_PUBLIC;
  const[isLike,setisLike]=useState(false)
  const[like1,setlike]=useState(likes)
  console.log(likeA,"img")
  useEffect(()=>{
    const fetchuser=async()=>{
      try{
        const res=await axios.get(`http://localhost:5173/api/user/u1/?userId=${uid}`)
      console.log("user",res)
      setuser(res.data)
      }catch(e){console.log("e",e)}
      
    }
    fetchuser();
  },[uid]) 
  // console.log(likes,"like")

const Likehandler=async()=>{
  try{
    const like=await axios.put("/api/post/like/"+id,{userId:uid})
    conosle.log(like,"like")


    
  }catch(e){}
  console.log(like1,"yha dekh")
  setlike(isLike?like1-1:like1+1)
  console.log(like1,"yha dekh1")
  setisLike(!isLike)
}

useEffect(()=>{
  setisLike(likeA.includes(uid))
},[uid,likeA])


  return (
    <Card sx={{marginTop:5}}>
      <CardHeader
        avatar={
        <Link to={`/profile/${user.uname}`} style={{textDecoration:"none"}}>
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            R
          </Avatar>
        </Link>
        

               }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${user.uname}`}
        subheader={format(`${time}`)}
      />
      {
        img&&<CardMedia
         component="img"
         height="20%"
         image={`${pf}/uploads/${img}`}
         sx={{objectFit:"cover"}}
       />

      }
     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       {desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox onClick={Likehandler} icon={<FavoriteIcon />} checkedIcon={<FavoriteIcon sx={{color:"red"}} />}  />
       {like1}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>

  )
}
