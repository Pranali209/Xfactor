import React from 'react'
import Heading from '../Heading'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-black p-7 max-md:w-full'>
      <footer className=" lg:block">
        <div className="flex  max-md:flex-col text-black justify-between items-start
        bg-white rounded-xl p-5  max-md:h-auto">
          <div className="mb-4 md:mb-0 max-md:flex  max-md:w-full justify-between ">
            <div className="flex items-center">
              <div className="w-5.5 h-5.5 rounded-sm bg-black flex justify-center items-center  mr-1.5">

              </div>
              <h1 className="text-xl  text-[#0a0b0b]">X-Factor</h1>
            </div>
         
          </div>
          <div className="text-black ">
            <h3 className="text-lg font-bold mb-2">Information</h3>
            <ul className="text-sm  ">
             
              <li>
                <a href="/hackathon#faqSection" className="hover:text-gray-300">FAQ</a>
              </li>
              
          
              <li>
                <a href="/" className="hover:text-gray-300">Application</a>
              </li>
            </ul>
          </div>
          <div className="text-black max-md:mt-9">
            <Link to='/form' className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
              Contact
            </Link>
            <p className="mt-2 text-sm">Payments@X-Factor.capital</p>
            <p className="text-sm">admin@X-factor.xyz</p>
          </div>
        </div>
      </footer>
      <div class="bg-black mt-8 py-4 text-white flex max-md:flex-col justify-between  mr-14 max-md:mr-1.5">

        <h1 className="text-4xl  max-md:text-2xl text-left font-bold">Your Startup. Our Platform. <br /> Together, We Build the Future</h1>
        <div class="flex flex-col justify-center mt-4">
          <Heading className="text-sm text-white mb-2.5" text="Just send us your contact email and we will contact you. " />
          <div>
            <input type="email" placeholder="Your Email" className="bg-black rounded-lg text-white 
            px-4 w-96 max-md:w-full border-[1px] border-white py-2 focus:outline-none focus:ring-2 focus:ring-gray-600" />
            <button className=" text-white -ml-5 max-md:-ml-6 ">→</button>
          </div>

        </div>

      </div>
      <p class="mt-4 text-xs  text-white">© 2025 - Copyright</p>
    </div>
  )
}

export default Footer