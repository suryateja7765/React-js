import { Route, Routes } from "react-router-dom"
import LoginScreen from "../../static-Pages/login-screen"
import InvalidScreen from "../../static-Pages/invalid-screen"


const PreRoute=()=>{
    return(
        <Routes>
                <Route path="/" Component={LoginScreen}/>
                <Route path="*" Component={InvalidScreen}/> 
        </Routes>
    )
}

export default PreRoute