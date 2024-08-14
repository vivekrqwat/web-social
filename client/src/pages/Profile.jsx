import React from 'react'
import Navbar from '../components/Navbar'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Rigthbar from '../components/Rigthbar'
import PFeed from '../components/PFeed'
import Admin from '../components/Admin'
import logo from "../images/1.jpg"
import {getp} from "../j"
import { getImageUrl } from '../utils/imageutil'
import { useParams } from 'react-router-dom'

export default function Profile() {
  const {uname}=useParams();

const p=getp();
  const pf=(import.meta.env).VITE_API_PUBLIC;
console.log("pf",pf+"clashroyal.jpg",p,`../images/${p[0].sam}`)
  return (
   <Box display={"flex"} flexDirection={"column"}  margin={{sm:"-15px",xs:"-20px"} }
   
   >
    <Navbar></Navbar>
     <Stack direction={"row"} spacing={2} height={"100vh"}>
        <Sidebar></Sidebar>
      
      <Box  flex={{sm:"4",xs:"-1"}} >
        <Box height={"65%"}
     
        
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        position={"relative"}

        
        >
       <img src={getImageUrl( p[0].bg) } style={{width:"102%",height:"75%",objectFit:"cover"}}></img>
        <Box display={"flex"} flexDirection={"column"} position={"absolute"} top={{sm:"285px",xs:"375px"}} alignItems={"center"}>
        <Avatar alt="v" sx={{height:75,width:75}} src={getImageUrl( p[0].p) }></Avatar>
        <Typography>{uname}</Typography>
        
       
        <Typography sx={{overflow:"hidden"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quibusdam aperiam doloribus distinctio totam, architecto accusantium minus accusamus tempora eum ratione nostrum omnis soluta voluptatum perspiciatis dolorum ipsam debitis quae.</Typography>
       

        </Box>
        
        </Box>
        
        
        <Box display={"flex"} sx={{marginTop:{sm:"-10px",xs:"10px"},width:{sm:"100%"}}} >
        <Feed></Feed>
        <Rigthbar></Rigthbar>
        </Box>
       
        </Box>  
            
        
       
       
     
       </Stack>
       
      </Box>
     


  
      

  )
}
