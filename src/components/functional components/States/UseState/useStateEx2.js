import { useState } from "react"


const UseStateX2 =()=>{
const [time,setTimer]=useState(0);

const handleTimer=()=>{

    setInterval(()=>{
        setTimer(time=>time+1) 
    },1000)

}

const handleReset=()=>{
    clearInterval(setTimer);
    setTimer(0)
}

    return(
            <>
            <h1>timer {time}</h1>
            <button onClick={handleTimer}>click to start</button>
            <button onClick={handleReset}>reset</button>
            </>
)
}
export default UseStateX2

