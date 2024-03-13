import { useContext } from "react"
import ComponentA from "../functional components/context/componentA"
import Header from "../functional components/navbar/navbarActive"
import { UserDetails } from "../navigation/nav"

const AboutScreen=()=>{
    let globalInfo=useContext(UserDetails)
    console.log(globalInfo)

    const changeName=()=>{
        globalInfo.changeName()
    }
    return(
        <>
        <h2>
            <Header/>
            AboutScreen
            <h3>i am from navigation.js, global info {globalInfo.username}</h3>
            <button onClick={changeName}>changeName</button>
            <ComponentA/>
        </h2>
        </>
    )
}

export default AboutScreen
