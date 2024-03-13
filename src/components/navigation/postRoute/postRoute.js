import { Route, Routes } from "react-router-dom"
import HomeScreen from "../../static-Pages/home-screen"
import AboutScreen from "../../static-Pages/about-screen"
import SettingScreen from "../../static-Pages/setting-screen"
import ProfileScreen from "../../static-Pages/profile-service"
import InvalidScreen from "../../static-Pages/invalid-screen"
import ProductDetail from "../../static-Pages/productDetail"




const PostRoute=()=>{
    return(
        <>
        <Routes>
                <Route path="/" Component={HomeScreen}/>
                <Route path="/about" Component={AboutScreen}/>
                <Route path="/settings" Component={SettingScreen}/>
                <Route path="/profile" Component={ProfileScreen}/>
                <Route path="*" Component={InvalidScreen}/>       
                <Route path="/:category/:id" Component={ProductDetail}/>            
            
            
            </Routes></>
    )
}

export default PostRoute