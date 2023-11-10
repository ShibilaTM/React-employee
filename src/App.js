import React from 'react'
import {   Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Empform from './components/Empform'
import Navbar from './components/Navbar'

const App = () => {
  return (
    
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/form' element={<Empform/>}></Route>      
      </Routes>
    </div>
    
  )
}

export default App

