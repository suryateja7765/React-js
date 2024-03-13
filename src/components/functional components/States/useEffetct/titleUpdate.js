import { useEffect} from "react"


const Unmounting=()=>{
    useEffect(()=>{
        window.addEventListener("mouseover",callbackFunction)
    },[])

const callbackFunction=(event)=>{
console.log(event.clientX);
}
    return(
        <>
        <h1>useEffect</h1>
        

        </>
    )
}

export default Unmounting


