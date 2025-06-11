import React from 'react'
import Navbar from './components/Navbar'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'
import Services from './pages/Services'
import RootLayout from './layout/RootLayout'
import NotFound from './components/NotFound'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='project' element={<Project />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />


        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
} 

export default App