import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import { Login } from '../pages/login/Login';
import { Logout } from '../pages/login/Logout';
import { Protected } from '../common/Protected';
import { Sidebar } from '../common/Sidebar';
import { Product } from '../common/Product';
import { Item } from '../common/Item';
export const Allroutes = () => {
    return (
        <BrowserRouter>
            {/* <Navbar> */}<Sidebar>
                <Routes>
                    <Route path="/" element={<Protected Component={Home} />} />
                    <Route path="/Product" element={<Protected Component={Product}/>}/>
                    <Route path="/About" element={<Protected Component={About} />} />
                    <Route path="/Contact" element={<Protected Component={Contact} />} />
                    <Route path="/Product/:id" element={<Item/>} />
                    <Route path="Login" element={<Login />} />
                    <Route path="Logout" element={<Protected Component={Logout} />} />
                </Routes>
                </Sidebar>
            {/* </Navbar> */}
        </BrowserRouter>
    );
}
