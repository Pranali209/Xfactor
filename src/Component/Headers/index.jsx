import React, { useState , useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
    console.log(location.pathname);
    
  }, [location]);

  return (
    <header className="flex justify-between items-center mb-8 px-16 py-5 max-md:px-5">
      <div className="flex items-center">
        <div className="w-5.5 h-5.5 rounded-sm bg-black flex justify-center items-center  mr-1.5"></div>
        <h1 className="text-xl text-[#0a0b0b]">X-Factor</h1>
      </div>
      <nav className="flex space-x-4 justify-between items-center">
        <Link
          to="/"
          className={`text-black hover:text-gray-500 font-medium ${
            activeLink === '/' && 'text-gray-500  underline'
          }`}
        >
          Home
        </Link>
        <div className='bg-black h-2 w-2 rounded-full'></div>
        <Link
          to="/about"
          className={`text-black hover:text-gray-500 font-medium ${
            activeLink === '/about' && 'text-gray-500  underline'
          }`}
        >
          About Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
