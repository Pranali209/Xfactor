import React, { useEffect, useState } from 'react'
import Heading from '../Component/Heading'
import Ximage from '../assets/bg-x.svg'
import Wheel from '../assets/wheel.svg'
import Header from '../Component/Headers'
import Box from '../Component/box'
import Footer from '../Component/Footer'
import { Navigate, useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 3000);
    return () => clearInterval(interval);
  }, [])
  const heroBox = [
    {
      id: 1,
      title: 'Acceleration Program (Soon)',
      text: 'A program built for startups ready to scale, disrupt, and dominate their industries.',
    }, {
      id: 2,
      title: 'Hackathon',
      text: 'The ultimate challenge for creators solving real-world problems.',
    }
  ]

  function HandleOnclick(id) {

    if (id === 1) {
      navigate('/acceration')
    }
    else {
      navigate('/hackathon')
    }

  }
  return (
    <>

      <div className='backX ' >
        <Header />
        <div id="Hero" className='' >
          <h1 className=" max-md:hidden lg:block text-6xl text-black text-left text-normal  px-28 mt-16 leading-16 max-md:px-5 max-md:text-[43px] max-md:leading-12">
            Your Startup. Our <br /> Platform. Together, We <br/>Build the  Future. </h1>

            <h1 className=" max-md:block lg:hidden text-6xl text-black text-left text-normal  px-28 mt-16 leading-16 max-md:px-5 max-md:text-[43px] max-md:leading-14">
            Your Startup. Our  Platform. Together, We Build the Future. </h1>
          <p className=" text-[17px] mt-2 max-md:mt-5 text-left px-28 max-md:px-5  pr-[33rem] text-gray-800"  >X-Factor is where the most innovative startups accelerate their vision, scale <br />
            their impact, and stand out in a world of mediocrity.</p>

        </div>
        <section className='flex  max-md:flex-col justify-around items-center'>
          <img src={Wheel} alt="wheel" className='max-md:hidden' />

          <div className=' '>

            <Heading className="text-4xl mb-5 text-center mx-auto " as="h1" text="Our Program" />



            <div className='flex justify-between  max-md:flex-col max-md:items-center max-md:px-5'>

              {
                heroBox.map((item) => {
                  return (
                    <Box id={item.id} heading={item.title} txt={item.text} onClick={() => HandleOnclick(item.id)} />
                  )
                })
              }
            </div>
          </div>



        </section>
        

      </div>
    </>
  )
}

export default Home