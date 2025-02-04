import React from 'react';
import Button from '../Component/Button';
import about1 from '../assets/about1.svg'
import about2 from '../assets/about2.svg'
import about3 from '../assets/about3.svg'
import { useNavigate } from 'react-router-dom'
const AboutUs = () => {
  const navigate = useNavigate()
    const data= [
        {
            id:1,
            head: "Why We Exist" ,
            desc :"Because the world doesn't need another average startup. It needs visionaries. We're here to empower the dreamers, the disruptors, and the daring. That's you, right?",
            icon : about1
        },
        {
            id:2,
            head : "Our Promise to You",
            desc: "We'll challenge you, guide you, and open doors you didn't know existed. Together, we'll turn your bold vision into real-world impact.",
            icon : about2
        },
        {
            id:3,
            head: "Let's Build Something Epic",
            desc : "We believe startups like yours have the power to change the game. Let's start the journey",
            icon : about3
            
        }
    ]
    function handleForm(params) {
      navigate('/form')
  }
  return (
    <div className="container mx-auto p-8 py-10 flex  justify-between align-middle items-center flex-col">
      <h1 className="text-3xl text-center text-black  mb-4">About Us</h1>
      <p className="text-lg text-gray-500 mb-8 text-center">We're X-Factor. Nice to Meet You</p>
      {
        data.map((item) => {
            return (
                <div key={item.id} className="w-3xl rounded-3xl shadow-lg p-8 py-9 mb-10 boxShadow">
                    <div className='flex justify-center items-center'>
                    <h2 className="text-xl font-semibold text-black mb-2 text-center">{item.head}</h2>
                    <img src={item.icon} alt={item.icon} className='h-14'  />
                    </div>

                <p className="text-gray-500 text-center mt-3.5">{item.desc}</p>
              </div>
            )
        })

      }
     
      
    <Button className = "!w-44 !px-0.5" txt="Join the Movement" onClick={handleForm}/>
    </div>
  );
};

export default AboutUs;
