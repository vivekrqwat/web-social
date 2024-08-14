import { useContext, useState } from 'react'
import Reg from './pages/Reg'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { Box } from '@mui/material'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate, Link
 
} from "react-router-dom"
import { Context } from './components/Context/Context'
import Chatpage from './pages/Chatpage'


function App() {
  const [count, setCount] = useState(0)
  const{state,dipatch}=useContext(Context)

  return (
    <Box width={"100%"}  >
     
   
     <Router>
      <Routes>
        <Route path="/" element= {state.user ? <Home /> : <Reg />}>
      
        </Route>
        <Route path="/login" element={state.user ? <Navigate to="/" /> : <Login />}></Route>
        <Route path="/register" element={state.user ? <Navigate to="/" /> : <Reg />}>
          
        </Route>
        <Route path="/profile/:uname" element={<Profile />}>
         </Route>
        </Routes>
      {/* <Chatpage></Chatpage> */}
   
    </Router>
    </Box>

    
    
  )
}

export default App
