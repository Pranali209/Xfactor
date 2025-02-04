import React from 'react'

function Heading( {className , as, text}) {
  return (
     <p as={as} className= {className}>{text}</p>
  )
}

export default Heading