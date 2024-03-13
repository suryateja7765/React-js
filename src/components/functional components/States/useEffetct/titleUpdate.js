import { useEffect, useState} from "react"


const Unmounting=()=>{
    const[x,updX]=useState(null)
    const[y,updY]=useState(null)

    useEffect(()=>{
        window.addEventListener("mouseover",callbackFunction)
        return ()=>{
            window.removeEventListener('mousemove',callbackFunction)
        }
    },[])

const callbackFunction=(event)=>{
    updX(event.clientX)
    updY(event.clientY)
    
console.log(event.clientX);
}
    return(
        <>
        <h1>useEffect</h1>
        <h3>x direction{x} </h3>
        <h3>y direction {y}</h3>
        

        </>
    )
}

export default Unmounting


