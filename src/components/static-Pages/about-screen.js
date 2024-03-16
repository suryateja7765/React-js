import { useContext } from "react"
// import ComponentA from "../functional components/context/componentA"
import Header from "../functional components/navbar/navbarActive"
import { UserDetails } from "../navigation/nav"
// import useCounter from "../functional components/States/customhook/example"

const AboutScreen=()=>{
    let globalInfo=useContext(UserDetails)
    console.log(globalInfo)
     
    // const[count,setCount]=useCounter()

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
            {/* <ComponentA/> */}
            {/* <h4>{count}</h4> */}
            {/* <button onClick={setCount}></button> */}
        </h2>
        </>
    )
}

export default AboutScreen
