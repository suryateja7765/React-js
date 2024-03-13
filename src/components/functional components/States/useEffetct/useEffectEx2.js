import axios  from "axios"
import { useEffect, useState } from "react"

const UseEffectEX2=()=>{

    const[count,upCount]=useState(0)

    const [data,setData]=useState([])

    useEffect(()=>{
     fetchData()
   
    },[])

    const fetchData=async()=>{
       const result=await axios.get("https://fakestoreapi.com/products") 
    //    console.log(result);
      setData(result.data)
    }
    // fetch("https://fakestoreapi.com/products")
    // .then(resolve=>resolve.json())
    // .then(resolve=>console.log(resolve))
    //    const dataAsync= async()=>{
    //       const responseData=await fetch("https://fakestoreapi.com/products")
    //     //   console.log(responseData);
    //     const respv= await responseData.json();
    //     console.log(respv);

        // dataAsync()

    

    const handleClick=()=>{
        upCount(count+1);

    }
    return(
        <>
        <h1>count:{count}</h1>
        <button onClick={handleClick}>click</button>
        {
            data.length>0
            ?
            data.map(item=><h4 key={item.id}>{item.title}</h4>)
            :
            console.log("unfound data")
        }
        </>
    )
}
export default UseEffectEX2
    


