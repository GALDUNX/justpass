import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sharedcomponent from './Sharedcomponent'
// import Home from '../HomeFile/Home'
import IndexHome from '../HomeFile/IndexHome'

const Entry = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Sharedcomponent/>}>
                <Route index element={<IndexHome/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Entry
