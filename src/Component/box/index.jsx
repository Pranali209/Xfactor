import React from 'react'
import Button from '../Button'
import arrows from '../../assets/arrows.svg'

function Box({ id, heading, txt, onClick }) {
    return (
      <div className='bg-white max-md:mr-5 shadow-2xl w-[21rem] 
      slide1 p-5 py-14 px-10 h-72 m-6 justify-around flex flex-col max-md:ml-5
      max-md:px-5'>
        <h1 className='text-2xl font-semibold'>{heading}</h1>
        <p className='text-[13px] mt-2 max-md:mb-3 hackthon'>{txt}</p>
        {id == 2 ? (
          <button className={`text-xs newbtnbg text-white px-2 w-36 py-3 cursor-pointer mr-5`}>
            Learn More
            <img src={arrows} className='ml-8 inline-block' />
          </button>
        ) : (
          <Button txt="Learn More" onClick={onClick} />
        )}
      </div>
    );
  }

export default Box