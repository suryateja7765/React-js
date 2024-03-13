import { BrowserRouter } from "react-router-dom"
import PostRoute from "./postRoute/postRoute"
import PreRoute from "./preRoute/preRoute"
import { createContext, useState } from "react"


export const UserDetails=createContext()


const NavigationStack=()=>{
     
    const [username,setUsername]=useState("dheeraj")
    const changeName=()=>{
    setUsername("hello")
}
    return(
    <BrowserRouter>
    <UserDetails.Provider value={{username,changeName}}>
    {
        true
        ?
        <PostRoute/>
        :
        <PreRoute/>
    }
    </UserDetails.Provider>
    </BrowserRouter>
)
}
export default NavigationStack