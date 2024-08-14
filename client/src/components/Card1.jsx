import { Avatar, Box, Button, Card, CardActions, CardMedia, IconButton, styled, TextField, Typography } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import React, { useContext,useRef, useState} from 'react'
import { Context } from './Context/Context';
import axios from "axios"
import { useParams } from 'react-router-dom';


export default function Card1() {
 
  const [file,setfile]=useState(null)
  
const {uname}=useParams();

  const VisuallyHiddenInput = styled('input')({
 border:"2px solid red",
  height: "100%",
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: "100%",
  opacity:"0"
    
  });
  


console.log("file",file)

  //
 
  const pf=(import.meta.env).VITE_API_PUBLIC;
  const {state,dispatch}=useContext(Context);
const desc=useRef()
console.log("state1",state.user)
  const AddPost=async()=>{
const user={
  desc:desc.current.value,
  userId:state.user._id
}

try{
  console.log("state",state._id)
  
 
  if(file){

    const data= new FormData()
    const filename= Date.now()+file.name
    console.log("filename",filename)
    data.append("name",filename)
    data.append("file",file)
    user.img=filename
    try{
      console.log(user);
      await axios.post("/api/upload",data)
    }catch(e){
      console.log("erroor",e)
    }
  }const res=await axios.post("/api/post/",user) 
  setfile(null)

  window.location.reload();
console.log("post",res)
}catch(e){console.log("error",e)}

}
  
  return (
  
    
  <Card sx={{margin:"18px",border:"2px solid yellow",zIndex:"999", marginTop:"15px",width:"95%",borderRadius:"5px"}}>
    <Box display={"flex"} 
    flexDirection={"column"}
    
    width={"100%"} >
      <Avatar src="" alt="vivek"></Avatar>
     <TextField inputRef={desc} rows={2} variant={"standard"} sx={{width:"100%"}} placeholder='Whats on your mind'  multiline></TextField>
    </Box>
    <Box marginTop={5}>

    {file&&(<CardMedia
    component="img"
  
    
    image={URL.createObjectURL(file)}
    ></CardMedia>
    )}
   {/* <CardMedia
        component="img"
        height="20%"
        image="https://i0.wp.com/gamingonphone.com/wp-content/uploads/2021/03/91duOGX58CL-1-780x470.jpg"
        alt="Paella dish"
        sx={{objectFit:"cover"}}
      /> */}
    <CardActions >
      <IconButton>
        <PhotoCameraIcon></PhotoCameraIcon>
        {/* <input type="file" /> */}
        
        <Typography>PHOTO <VisuallyHiddenInput type="file" 
        onChange={(e)=>{setfile(e.target.files[0])}}
        />  </Typography>
      </IconButton>
      <IconButton>
       <LocalOfferIcon></LocalOfferIcon>
        <Typography>tag</Typography>
      </IconButton>
      <IconButton>
       <EmojiEmotionsIcon></EmojiEmotionsIcon>
        <Typography>feeling</Typography>
      </IconButton>
      <Button variant="contained" color={"success"} onClick={AddPost}> Post</Button>

    </CardActions>

    </Box>
   
  </Card>
  )
}
