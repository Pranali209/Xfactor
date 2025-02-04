import React from 'react'

function Box({ heading, txt }) {
    return (
        <div className='bg-white shadow-2xl w-[21rem] p-5 py-14 px-10 h-72 m-6 justify-around flex flex-col  '>
            <h1 className='text-2xl font-semibold'>{heading}</h1>
            <p className='text-[13px] mt-2'>{txt}</p>
            <button className=' text-xs bg-black text-white px-2 w-36 py-3 text-left'>Learn more</button>
        </div>
    )
}

export default Box