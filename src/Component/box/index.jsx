import React from 'react'
import Button from '../Button'

function Box({ heading, txt , onClick }) {
    return (
        <div className='bg-white shadow-2xl w-[21rem] p-5 py-14 px-10 h-72 m-6 justify-around flex flex-col  '>
            <h1 className='text-2xl font-semibold'>{heading}</h1>
            <p className='text-[13px] mt-2'>{txt}</p>
            <Button txt = "Learn More" onClick={onClick}/>
        </div>
    )
}

export default Box