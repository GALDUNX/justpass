import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Sharedcomponent = () => {
  return (
    <>
     <Navbar/>
     <Outlet/>
    </>
  )
}

export default Sharedcomponent
