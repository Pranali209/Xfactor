import React from 'react'
import Heading from '../Heading'

function BoxA({className , htxt ,ptxt ,etxt , hclass, pclass ,eclass }) {
  return (
    <div className={`${className} px-7  p-5 boxShadow rounded-3xl `}>
      
        <Heading className={`text-2xl max-md:text-xl text-center font-semibold text-black ${hclass}`} as="h1" text={htxt}/>
        <Heading className={` mt-6 text-center max-md:text-sm text-black ${pclass}`} as= "p" text={ptxt}/>
        <Heading className={`text-[15px]  mt-6 max-md:text-xs text-center text-black 
         ${eclass} `} as= "p" text={etxt}/>
    </div>
  )
}

export default BoxA