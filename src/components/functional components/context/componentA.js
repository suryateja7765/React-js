import React, { useState } from 'react'
import ComponentB from './componentB'

const ComponentA = () => {
  const[name,setName]=useState("kedarnath")
  
    return (
    <div>
      <ComponentB name={name}/>
      
    </div>
  )
}

export default ComponentA
