import React from 'react'
import Home from './components/Home'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Dashboard from './components/Dashboard'
import Empform from './components/Empform'

const App = () => {
  return (
    
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/dash' element={<Main child={<Dashboard/>}/>}></Route>
        <Route path='/form' element={<Empform/>}></Route>      
      </Routes>
    </div>
    
  )
}

export default App

