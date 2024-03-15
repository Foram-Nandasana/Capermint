import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Sidebar } from '../common/Sidebar'
import Home from '../pages/Home'
import { Login } from '../pages/login/Login'
import { Logout } from '../pages/login/Logout'
import { Protected } from '../common/Protected'
import { Product } from '../common/Product'

const FinalRoutes = () => {
  return (
    <BrowserRouter>
    <Sidebar>
        <Routes>
            <Route path='/' element={<Protected Component={Home}/>}/>
            <Route path='/Product' element= {<Protected Component={Product}/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Logout' element= {< Protected Component={Logout}/>}/>
        </Routes>
    </Sidebar>
    </BrowserRouter>
  )
}

export default FinalRoutes