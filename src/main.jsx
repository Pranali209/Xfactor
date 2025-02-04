import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from './Pages/about.jsx'
import Acceration from './Pages/Acceration.jsx'
import Hackthon from './Pages/Hackthon.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>
  },
  {
    path :'/about',
    element : <AboutUs/>
  },{
    path :'/acceration',
    element: <Acceration/>
  },{
    path :'/hackathon',
    element: <Hackthon/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
   
  </StrictMode>,
)
