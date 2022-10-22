import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from '../Detail'
import Home from '../Home'
import Login from '../Login'
import Register from '../Register'

const index = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/detail/:id" element={<Detail />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    
    </Routes>
    </BrowserRouter>
  )
}

export default index