import { AppBar, Avatar, Badge, Box, InputBase, Stack, styled, Toolbar, Typography } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import React, { useContext } from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import {Link} from 'react-router-dom'
import { Context } from './Context/Context';

export default function Navbar() {
  const{state,dispatch}=useContext(Context)
  console.log("stae",state.user)
  
  const AvatarContiner=styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{display:"none"}
}))

const InputContiner=styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{display:"flex"}
}))
const LinkContaine=styled(Box)(({theme})=>({
display:"flex",
width:"10%",
justifyContent:"space-between"
}))
  
  return (
    
    <Box width={"100%"}>
        <AppBar component="nav" position='sticky' width={"100%"}>
          <Toolbar>
            <Box display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            gap={4}>
              <Link to="/home" style={{textDecoration:"none"}}>
            <Typography sx={{display:{sm:"block",xs:"none",color:"white"}, }}>VCHAT</Typography></Link>
            <PetsIcon sx={{display:{xs:"block",sm:"none"}}}></PetsIcon>
            <Box 
           display={{xs:"none",sm:"block"}}
            width={"55%"}
            marginLeft={15}
           borderRadius={"10px"} 
           sx={{background:"white"}}
            background={"green"}
            > <InputBase></InputBase></Box>
            {/* <LinkContaine>
            <Typography>HOME</Typography>
            <Typography>TimeLine</Typography>
            </LinkContaine> */}
            
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{gap:{xs:"10px",sm:"45px"}}} width={{sm:"40%"}} >
              <Typography>HOme</Typography>
              <Typography>Timeline</Typography>
              <Badge display={{xs:"none",sm:"block"}}>
            <PersonAddIcon></PersonAddIcon>
            </Badge>
            <Badge>
           <ChatBubbleIcon></ChatBubbleIcon>
            </Badge>
            <Link to={`/profile/${state.user.uname}`}>
            <Avatar src={""} alt="v"></Avatar>
            </Link>
           
           
            

            </Box>
        
          
            
            </Box>

            </Toolbar> 
        </AppBar>
      
    </Box>
  )
}
