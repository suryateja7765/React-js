import { useEffect, useState } from "react";




const UseEffectEx1=()=>{
    const[counter,upCounter]=useState(0)
    const[counter1,upCounter1]=useState(0)
    useEffect(()=>{
        console.log("useEffect");
    },[counter, counter1])
    
    const handleClick=()=>{
        upCounter(counter+1)
    }
    const handleClick1=()=>{
        upCounter1(counter1+1)
    }
    return(
        <>
        <h1>counter{counter}</h1>
        <button onClick={handleClick}>increment</button>
        <h1>counter1{counter1}</h1>
        <button onClick={handleClick1}>increment1</button>
        
        </>
    )
}

export default UseEffectEx1; 