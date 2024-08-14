import React, { useEffect, useRef} from 'react'
import {Box, Button, styled, TextField, Typography} from"@mui/material"
import{delay, motion} from"framer-motion"
import logo from "../images/1.jpg"
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'



export default function Reg() {
const Motiotext=motion(Typography)
    const Stexed=styled(TextField)({
margin:"10px",
color:"white",


    
    })
   
    const uname=useRef()
    const email=useRef()
    const password=useRef()
    const history=useNavigate();
  
    const HandleSubmit=async(e)=>{
      e.preventDefault();
      console.log("sign in")
      const user={
        uname:uname.current.value,
        email:email.current.value,
        password:password.current.value
      }
      try{
        const res= await axios.post("/api/auth/register",user);
        history("/login")
         console.log(res)
      }catch(e){console.log(e)}
     
     
    }
  

  return (
 <Box sx={{
  display:"flex",
  height:"100vh",
  justifyContent:"space-evenly",
  alignItems:"center",
  background:"#134B70"
 


 }} >

  <Box
  sx={{flex:"1",display:"flex",justifyContent:"center",alignItems:"center"}}
  >
    <motion.div 
   
    animate={{y:[-1000,100,0,100,0]}}
    transition={{delay:0.5,duration:2,type:"spring",stiffness:90}}>
    <img src={logo}></img>
    </motion.div>
  
  
    
  </Box>
 <form action=""
 onSubmit={HandleSubmit}
 style={{
  flex:"2",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  border:"2px solid white",
  borderRadius:"10px",
  overflow:"hidden",
  color:"white",
  opacity:"0.8"
 }}
 >
    < Motiotext 
    animate={{x:[-1000,100,0]}}
    transition={{delay:0.1,duration:2,type:"spring",stiffness:90}}
    style={{fontFamily:"italic",fontSize:"40px",margin:"5px"}}

    >REGISTER</ Motiotext>
    <Stexed variant='outlined' label="enter name" name="uname" maxRows={4} size='medium' type="text"   
    sx={{'& input':{color:"white"},
  '& .Mui-focused':{color:"white"},
  "& .MuiOutlinedInput-root":{
    '& fieldset':{borderColor:"white"},
    "& label":{color:"white"}
  }
  }
  
  }
  inputRef={uname}
 
    ></Stexed>
    <Stexed variant='outlined' label="enter email" name="email" maxRows={4} size='medium' type="email"
       sx={{'& input':{color:"white"},
       '& .Mui-focused':{color:"white"},
       "& .MuiOutlinedInput-root":{
         '& fieldset':{borderColor:"white"},
         "& label":{color:"white"}
       }
       }
       
       }
       inputRef={email}
    
    ></Stexed>
    <Stexed variant='outlined' label="enter password" name="password" maxRows={4} size='medium' type="password"
    
    sx={{'& input':{color:"white"},
    '& .Mui-focused':{color:"white"},
    "& .MuiOutlinedInput-root":{
      '& fieldset':{borderColor:"white"},
      "& label":{color:"white"}
    }
    }
    
    }
    inputRef={password}
    
    ></Stexed>
    <Button variant='contained' type='submit'>sign in</Button>
    <p>you have an account <Link to="/login"><Typography>login</Typography></Link></p>
 </form>
 </Box>
  )
}
