import { useContext } from "react"
import Header from "../functional components/navbar/navbarActive"
import { UserDetails } from "../navigation/nav"



const ProfileScreen=()=>{
    const UserDetailss=useContext(UserDetails)
    return(
        <>
        <h2>
            <Header/>
        ProfileScreen
        <p>hi this {UserDetailss.username}</p>
        </h2>
        </>
    )
}

export default ProfileScreen