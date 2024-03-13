


import React from 'react'
import ComponentC from './componentC'

const ComponentB = ({name}) => {
  return (
    <div>
      <ComponentC name={name}/>
     
    </div>
  )
}

export default ComponentB
