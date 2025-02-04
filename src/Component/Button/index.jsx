import React from 'react'
import arrows from '../../assets/arrows.svg'
function Button({className ,txt}) {
  return (
    <button className= {`text-xs btnbg text-white px-2 w-36 py-3  ${className} cursor-pointer mr-5`}>{txt }
    <img src= {arrows} className='ml-8 inline-block'/>
    </button>
  )
}

export default Button