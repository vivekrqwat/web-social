import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'
import Card1 from './Card1'

export default function PFeed() {
  return (
   <Box flex={2}
  >
   <Box width={"100%"} height={"0%"}>

   </Box>
   
   <Card1></Card1>
   <Post></Post>
   </Box>
  )
}
