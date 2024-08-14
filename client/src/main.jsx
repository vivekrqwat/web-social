import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Box } from '@mui/material'
import Home from './pages/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Reg from './pages/Reg.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import  {Context, ContextProvider} from './components/Context/Context.jsx'

// console.log(state.user)
// const router = createBrowserRouter([
//   {
//     path: "/home",
//     element: (<Home></Home>),
//   },
//   {
//     path: "/reg",
//     element: <Reg></Reg>,
//   },
//   {
//     path: "/",
//     element: <Login></Login>,
//   },
//   {
//     path: "/profile/:uname",
//     element: <Profile></Profile>,
//   },
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ContextProvider>
  
     
      <App></App>

      
    
      </ContextProvider>

  </React.StrictMode>,
)
