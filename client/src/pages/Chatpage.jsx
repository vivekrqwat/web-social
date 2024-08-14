import { Avatar, Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Stack, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"
import { Context } from '../components/Context/Context'
import List1 from "../components/List1"

export default function Chatpage() {
const[l,setl]=useState([])
    const {state,dispatch}=useContext(Context)
console.log(state,"r")
    useEffect(()=>{
        const f=async()=>{
            const res= await axios.get(`/api/convo/${state.user._id}`)
            console.log(res,"res")
            setl(res.data)
        }
       f();
        
    },[])
  return (
   <Box>
    <Navbar></Navbar>
    <Stack spacing={2}  direction="row" sx={{width:"100%",
        border:"2px solid #e9d8a6"
    ,height:"100vh"
    
    }}
    divider={<Divider orientation="vertical" flexItem />}

    >
        <Box
        width={"20%"
        }
        bgcolor={"#3a86ff"}
        height={"100%"}
        overflow={"auto"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
       >
            <Typography color={"white"} variant='h5'> USER</Typography>
            <List sx={{width:"100%"}} >
               
               {l.map((i)=>{
                return <List1 id={i.member[1]}></List1>})
                }
            </List>
        </Box>
        <Box width={"80%"}
        border={"2px solid  #e9d8a6"}
        borderRadius={"10px"}> 
        <Stack 
        justifyContent="space-between"
        direction={"column"}  height={"90%"} >
            <Box height={"10%"} bgcolor={"#1e6091"}
            display={"flex"}
            gap={3}
            // justifyContent={"center"}
            alignItems={"center"}
            >
                <Avatar style={{marginLeft:"10px"}}></Avatar>
                <Typography>user_name</Typography>
            </Box>
            <Box height={"80%"}
            border={"2px solid #e7ecef"}
            bgcolor={"#f0ead2"}>b2</Box>
            <Box height={"20%"}
            // bgcolor={"grey"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            >
            <TextField id="standard-basic" label="Standard" variant="standard"
            style={{background:"white",
                width:"90%"
            }}
            rows={4} />
            <Button variant='contained'>SEND</Button>
            </Box>
        </Stack>

        </Box>
    </Stack>
   </Box>
  )
}
