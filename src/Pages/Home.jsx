import React, { useEffect, useState } from 'react'
import Heading from '../Component/Heading'
import Ximage from '../assets/bg-x.svg'
import Wheel from '../assets/wheel.svg'
import Header from '../Component/Headers'
import Box from '../Component/box'
import Footer from '../Component/Footer'
import { Navigate, useNavigate } from 'react-router-dom'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function Home() {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 3000);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };


  }, []);
  const heroBox = [
    {
      id: 1,
      title: 'Hackathon',
      text: 'The ultimate challenge for creators solving real-world problems.',
    },
    {
      id: 2,
      title: 'Acceleration Program (Soon)',
      text: 'A program built for startups ready to scale, disrupt, and dominate their industries.',
    }, 
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

      <div className={isMobile ? 'backXMobile' : ''} >
        <Header />
        <div id="Hero" className={!isMobile && 'backX'} >
          <h1 className=" max-md:hidden lg:block text-6xl text-black text-left text-normal  px-28 mt-16 leading-16 max-md:px-5 max-md:text-[43px] max-md:leading-12">
            Your Startup. Our <br /> Platform. Together, We <br />Build the  Future. </h1>

          <h1 className=" max-md:block lg:hidden text-6xl text-black text-left text-normal  px-28 mt-16 leading-16 max-md:px-5 max-md:text-[43px] max-md:leading-14">
            Your Startup. Our  Platform. Together, We Build the Future. </h1>
          <p className=" text-[17px] mt-2 max-md:mt-5 text-left px-28 max-md:px-5  pr-[33rem] text-gray-800"  >X-Factor is where the most innovative startups accelerate their vision, scale <br />
            their impact, and stand out in a world of mediocrity.</p>

        </div>
        <section className='flex  max-md:flex-col justify-around items-center overflow-hidden'>
          <img src={Wheel} alt="wheel" className='max-md:hidden' />

          <div className=' '>

            <Heading className="text-4xl mb-5 text-center mx-auto max-md:mt-10 " as="h1" text="Our Program" />

            <section className=' '>
              <div className='mt-20 p-5 max-md:px-10 max-md:pl-44  flex justify-around max-md:justify-between   slider-container'
                style={isMobile ? { transform: `translateX(-${currentIndex * 60}%)` } : {}}>


                {heroBox.map((item) => (
                  <Box
                    key={item.id}
                    id={item.id}
                    heading={item.title}
                    txt={item.text}
                    onClick={() => HandleOnclick(item.id)}
                  />
                ))}

              </div>
            </section>

          </div>

          

        </section>


      </div>
    </>
  )
}

export default Home