import { useState } from "react"
const UseState1 =()=>{
    
    const [count,updatedCount]=useState(0);

    const handleClick=()=>{
        
        updatedCount(count+1)
    }
    

    const handleClick1=()=>{
        updatedCount(count-1)
    }

    const handleReset=()=>{
        updatedCount(0)
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={handleClick}>inc</button>
        <button onClick={handleClick1}>dec</button>
        <button onClick={handleReset}>reset</button>
       
        </>
    )
}

export default UseState1

