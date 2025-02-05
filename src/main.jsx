import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from './Pages/About.jsx'
import Acceration from './Pages/Acceration.jsx'
import Hackthon from './Pages/Hackthon.jsx'
import Form from './Component/form/index.jsx'
import Article from './Pages/Article.jsx'

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
  },{
    path :'/form',
    element : <Form/>
  },{
    
      path :'/article',
      element : <Article/>
    }
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
   
  </StrictMode>,
)
