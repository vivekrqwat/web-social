import { Avatar, AvatarGroup, Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Rigthbar() {
    const[u,setu]=useState([])

    useEffect(()=>{
        const p=async()=>{
            const res=await axios.get("/api/user/one/all")
            console.log("vivek",res,"user")
            setu(res.data)
        }
        return ()=>{p();}

    },[setu])
  return (
   <Box zIndex={"999"} flex={1}  display={{xs:"none",sm:"block"}}>

<Box   width={"100%"} display={"flex"} flexDirection={"column"} 
alignItems={"center"}
justifyContent={"center"}>

    
    <Typography>Friends</Typography>
<AvatarGroup max={4} border={"2px solid blue"}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>




<Box sx={{width:"100%"}}>  


<Typography component={"span"} variant='body2'> USERS</Typography>
    <Divider ></Divider>
    {u.map((i)=>{
        return(
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
            <ListItem alignItems='flex-start'>
                <ListItemAvatar  >
                    <Avatar src="" alt="vivek"></Avatar>
                </ListItemAvatar>
                <ListItemText primary={i.uname} secondary={i.email}>
                    </ListItemText>
                    
                        
                   
            </ListItem>
            <Button variant="contained"> follow</Button>
            <Divider ></Divider>
        </List>
        )
    })}
   
</Box>
</Box>




   </Box>
  )
}
