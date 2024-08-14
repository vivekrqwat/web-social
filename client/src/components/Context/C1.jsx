import { createContext, useReducer } from "react";
import { AuthReducer}  from "./Reducer";
const Is={
    user:null,
    isFetching:false,
    error:false,
    
}
export const Context=createContext(Is)
 export const ContextProvider=({children})=>{
   
    const [state,dispatch]=useReducer(AuthReducer,Is)
   console.log("dis",dispatch,state)

    return(<Context.Provider value={{state,dispatch}}
    >
        {children}
    </Context.Provider>);
};
