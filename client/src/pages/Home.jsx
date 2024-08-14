import React ,{lazy,Suspense} from 'react'
import Navbar from '../components/Navbar'
import { Box, Stack } from '@mui/material'
import Sidebar from '../components/Sidebar'
// import Feed from '../components/Feed'
import Rigthbar from '../components/Rigthbar'
const Feed=lazy(()=>import('../components/Feed'))


export default function Home() {
  return (
   <Box  sx={{ margin:"-14px"}} display={"flex"} flexDirection={"column"} >
    <Navbar></Navbar>
     <Stack direction={"row"} spacing={2} height={"100vh"}>
        <Sidebar></Sidebar>

        {/* <Feed></Feed> */}
        <Suspense >
          <Feed></Feed>
        </Suspense>
        <Rigthbar></Rigthbar>
     </Stack>

   </Box>
      

  )
}
