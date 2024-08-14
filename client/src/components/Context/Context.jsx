import { createContext, useEffect, useReducer } from "react";
import { AuthReducer}  from "./Reducer";
const Is={
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false
}
export const Context=createContext(Is)
  export const ContextProvider=({children})=>{
   
    const [state,dispatch]=useReducer(AuthReducer,Is)
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])
   
  
    return(<Context.Provider value={{
        state,
        dispatch

    }}>
        {children}
    </Context.Provider>);
}
