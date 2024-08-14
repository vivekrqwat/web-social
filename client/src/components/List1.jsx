import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function List1({id}) {
    const [s,sets]=useState();
  console.log(id)
 


    useEffect(()=>{
        const id= async()=>{
            try{
                const res1=axios.get(`/api/user?userId=669cf513d30fd75b4ad01a58`)
                console.log(res1,"lise")
            }catch(e){console.log(e)}
           
        }
        id();
    },[])
    console.log(id,"lidt")
  return (
    <ListItem  sx={{background:"#a2d2ff"}}>
    <ListItemAvatar>
        <Avatar></Avatar>
    </ListItemAvatar>
    <ListItemText
    primary={"vivek"}
    secondary={"desc"}>

    </ListItemText>
</ListItem>
  )
}
