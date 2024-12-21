

import Nav from './componentes/nav'
import Home from './componentes/home'
import About from './componentes/about'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import User from './componentes/User'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Nav/><Home/></>
    },
    {
      path:"/about",
      element:<><Nav/><About/></>
    },
    {
      path:"/about/:id",
      element:<><Nav/><User/></>
    },
    {
      path:"/home",
      element:<><Nav/><Home/></>
    }
  ])

  return (
    <>
    <RouterProvider router={router}>

        <Nav/>
    </RouterProvider>
    </>
  )
}

export default App
