import { useState } from "react";

const Empolyee = () =>{
    const[curr,setCurr]=useState([
        {name:"surya",role:"frontend developer",salary:30000},
        {name:"aravind",role:"backend developer",salary:35000},
        {name:"kedar",role:"full stack developer",salary:45000}
    ])   

    const addEmpolyee = () =>{
       let newEmployee = [...curr,{name:"sai",role:"azure developer",salary:50000}]
        setCurr(newEmployee)
    }

    const deleteName =(idx) =>{
        let newEmployee =[...curr];
        newEmployee.splice(idx,1)
        setCurr(newEmployee)
    }
    return(

        <>
        <h2>Employee sheet:</h2>
        <button onClick={addEmpolyee}>add employee</button>
        {
            curr.map((each, idx) =>  
            <>
            <h3>name:{each.name}</h3>
            <h3>role: {each.role}</h3>
            <h3>salary: {each.salary}</h3>
            <button onClick={()=>deleteName(idx)}>delete</button>
            </>)
        }
        </>
    )
}
export default Empolyee;