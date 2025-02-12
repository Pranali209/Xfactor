import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Headers'
import Home from './Pages/Home'
import Footer from './Component/Footer'

function App() {


  return (
    <div className='backGrid '>
    
     <Home/>
     <Footer/>
    </div>
  )
}

export default App
