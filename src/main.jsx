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
import ScrollToTop from './Component/ScrollToTop/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <ScrollToTop />
        <AboutUs />
      </>
    )
  }, {
    path: '/acceration',
    element: (
      <>
        <ScrollToTop />
        <Acceration />
      </>
    )
  }, {
    path: '/hackathon',
    element: (
      <>
        <ScrollToTop />
        <Hackthon />
      </>
    )
  }, {
    path: '/form',
    element: (
      <>
        <ScrollToTop />
        <Form />
      </>
    )
  }, {

    path: '/article',
    element: (
      <>
        <ScrollToTop />
        <Article />
      </>
    )
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
