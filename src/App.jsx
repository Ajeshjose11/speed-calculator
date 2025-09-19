import { useState } from 'react'
import './App.css'
import Calculator from './pages/Calculator'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Calculator/>}></Route>
      </Routes>
    </>
  )
}

export default App
