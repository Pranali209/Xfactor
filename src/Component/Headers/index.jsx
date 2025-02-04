import React from 'react'
import '../../App.css'
import { useNavigate , Link} from 'react-router-dom'

function Header() {
 
  return (
    <header className="flex justify-between items-center mb-8 px-16 py-5">
    <div className="flex items-center">
      <div className="w-5.5 h-5.5 rounded-sm bg-black flex justify-center items-center  mr-1.5">
        
      </div>
      <h1 className="text-xl  text-[#0a0b0b]">X-Factor</h1>
    </div>
    <nav className="flex space-x-4 justify-between items-center">
      <a href="#" className="text-gray-500 hover:text-black underline font-medium">Home </a>
      <div className='bg-black h-2 w-2 rounded-full'></div>
      <Link to= "/about" className="text-[#0a0b0b] hover:text-gray-500 font-medium"
     >About Us</Link>
    </nav>
  </header>
  )
}

export default Header