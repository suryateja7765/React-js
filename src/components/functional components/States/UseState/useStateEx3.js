
import React, { useState } from "react";

const UseStateX3 = () => {
    
    const [fruits, setFruits] = useState(["mango", "banana", "grapes", "kiwi"]);

    const handleAdd = () => {
        const newFruit = [...fruits, "new fruit"];
        setFruits(newFruit);
    };

     const handleDelete=(index)=>{
       let newState=[...fruits]
        newState.splice(index,1)
        setFruits(newState)
     }

    return (
        <>
            <h2>to do list</h2>
            <button onClick={handleAdd}>Add Fruit</button>
            <ol>
                {fruits.map((eachElement, index) => (
                    <React.Fragment key={index}>
                        <li>{eachElement}</li>
                       <button onClick={()=>handleDelete(index)}>delete</button>
                    </React.Fragment>
                ))}
            </ol>
        </>
    );
};

export default UseStateX3;
