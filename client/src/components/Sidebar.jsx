import { Box, Button, Divider, List, ListItem, ListItemIcon, ListItemText, Switch, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import axios from 'axios';

export default function Sidebar() {
  const[p,setp]=useState("")
  const[ans,setans]=useState("")
  const ai=async(e)=>{
e.preventDefault();
    const res =await axios.post("https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyD8HFeI-wNOa3yb-QxapwHjNyp09s_YUqI",{"contents":[
      {"role": "user",
        "parts":[{"text": p}]}]})
        console.log(res["data"]["candidates"][0]["content"]["parts"][0]["text"],"ai")
        setans(res["data"]["candidates"][0]["content"]["parts"][0]["text"])
        setp("")


  }
  
  return (
   <Box flex={1} sx={{boxShadow:"5px 5px 2px #FEF3E2"}}
 >
    <Box position={"fixed"} display={{xs:"none",sm:"block"}}>

    <List>
        <ListItem>
        <ListItemIcon><HomeIcon></HomeIcon></ListItemIcon>
        <ListItemText>Home</ListItemText>
       
        </ListItem>
       
        <ListItem>
        <ListItemIcon><MenuBookIcon></MenuBookIcon></ListItemIcon>
        <ListItemText>pages</ListItemText>
        
        </ListItem>
        <ListItem>
        <ListItemIcon><PersonAddIcon></PersonAddIcon></ListItemIcon>
        <ListItemText>friends</ListItemText>
        
        </ListItem>
        <ListItem>
        <ListItemIcon><SettingsIcon></SettingsIcon></ListItemIcon>
        <ListItemText>Setting</ListItemText>
        
        </ListItem>
        <ListItem>
        <ListItemIcon><HomeIcon></HomeIcon></ListItemIcon>
        <ListItemText>Profile</ListItemText>
        
        </ListItem>
        <ListItem>
        <Switch   />

        </ListItem>
        <ListItem>
         <form onSubmit={ai}>
            <Typography>AI CHat</Typography>
           <Box
           height={"250px"}
           width={"350px"}
           overflow={"scroll"}
           sx={{overflowX:"hidden"}}
          > <Typography>{ans}</Typography></Box>
           
            <TextField onChange={(e)=>{setp(e.target.value)}} value={p}>et</TextField>
            <Button type="submit"> send</Button>
            </form>
        </ListItem>
        
      
        
    </List>
   

    </Box>
  
   
   </Box>
  )
}
