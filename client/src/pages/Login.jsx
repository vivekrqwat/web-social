import React, { useContext, useRef } from 'react'
import {Box, Button, styled, TextField, Typography} from"@mui/material"
import{delay, motion} from"framer-motion"
import logo from "../images/1.jpg"
import { loginCall } from './Apicall'
import  { Context } from '../components/Context/Context'


export default function Login() {
 const {state,dispatch}=useContext(Context)
//  console.log(dispatch,"dispatch")
  const Motiotext=motion(Typography)
  const Stexed=styled(TextField)({
margin:"10px",
color:"white",


  
  })
  const email=useRef()
  const password=useRef()
  const SubmitHandler=(e)=>{
    e.preventDefault()
    console.log(password.current.value)
   
    loginCall({email:email.current.value,password:password.current.value},dispatch);
 
  }
 
  return (
 
    <Box sx={{
      display:"flex",
      height:"100vh",
      justifyContent:"space-between",
      alignItems:"center",
      background:"#201E43"
     
    
    
     }} >
    
      <Box
      sx={{flex:"2",display:"flex",justifyContent:"center",alignItems:"center"}}
      >
        <motion.div 
       
        animate={{y:[-1000,100,0,100,0]}}
        transition={{delay:0.5,duration:2,type:"spring",stiffness:90}}>
        <img src={logo}></img>
        </motion.div>
      
      
        
      </Box  >
     <form action=""
     onSubmit={SubmitHandler}
     style={{
      
     
      flex:"3",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      border:"2px solid white",
      borderRadius:"10px",
      overflow:"hidden",
      color:"white",
      opacity:"0.8",
      background:"#134B70",
      
     }}
     >
        < Motiotext 
        animate={{x:[-1000,100,0]}}
        transition={{delay:0.1,duration:2,type:"spring",stiffness:90}}
        style={{fontFamily:"italic",fontSize:"40px",margin:"5px"}}
    
        >LOGIN</ Motiotext>
      
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
        <Button variant='contained' type={"submit"}>log in</Button>
        <p>you  dont have an account <Typography>register</Typography></p>
     </form>
     </Box>
   
  )
}
