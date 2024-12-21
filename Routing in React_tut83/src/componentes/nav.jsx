import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
   <>
   <ul>
    <li><NavLink className={(e) => {
      return e.isActive?"red":""
    }
    } to="/">Home</NavLink></li>
    <li><NavLink className={(e) => {
      return e.isActive?"red":""
    }
    } to="/about">About</NavLink></li>
    <li><NavLink className={(e) => {
      return e.isActive?"red":""
    }
    } to="/home">Homie</NavLink></li>
   </ul>
   </>
  )
}

export default Nav
