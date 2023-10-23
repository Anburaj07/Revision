import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import { CreateTodo } from './CreateTodo'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addTodo' element={<CreateTodo/>}/>
    </Routes>
  )
}

export default AllRoutes