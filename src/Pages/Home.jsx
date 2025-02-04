import React from 'react'
import Heading from '../Component/Heading'
import Ximage from '../assets/bg-x.svg'
import Wheel from '../assets/wheel.svg'
import Header from '../Component/Headers'
import Box from '../Component/box'
import Footer from '../Component/Footer'
import { Navigate, useNavigate } from 'react-router-dom'
 
function Home() {
  const navigate = useNavigate()
  const heroBox = [
    {
      id:1,
      title: 'Acceleration Program',
      text: 'A program built for startups ready to scale, disrupt, and dominate their industries.',
    },{
      id:2,
      title: 'Hackathon',
      text: 'The ultimate challenge for creators solving real-world problems.',
    }
  ]

  function HandleOnclick(id) {

    if(id === 1){
      navigate('/acceration')
    }
    else{
      navigate('/hackathon')
    }
    
  }
  return (
    <>
 
    <div >
    <Header/>
    <div id="Hero" className='backX ' >
    <h1  className= " text-6xl text-black text-left text-normal  px-28 mt-16 leading-16"> 
            Your Startup. Our <br/> Platform. Together, We <br/>Build the Future. </h1>
            <p className = " text-[17px] mt-2  text-left px-28 pr-[33rem] text-gray-800"  >X-Factor is where the most innovative startups accelerate their vision, scale <br/>
             their impact, and stand out in a world of mediocrity.</p> 
          
    </div>
    <section className='flex  justify-around items-center'>
         <img src={Wheel} alt="wheel"  />
       
         <div className=' '>
  
          <Heading className= "text-4xl mb-5 text-center mx-auto " as ="h1" text= "Our Program" />
         
       
         <div className='flex justify-between'>
         {
            heroBox.map((item) => {
              return (
                <Box key={item.id} heading={item.title}  txt = {item.text}  onClick={()=>HandleOnclick(item.id)}/>
              )
           })
          }
         </div>
          
         </div>
         
         </section>
          <section id="footer" className='mt-20'>
          <Footer/>
          </section>

        
    </div>
    </>
  )
}

export default Home