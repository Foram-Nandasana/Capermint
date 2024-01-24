import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import { Login } from '../pages/login/Login';
import { Logout } from '../pages/login/Logout';
import { Protected } from '../common/Protected';
import Navbar from '../common/navbar/Navbar';

export const Allroutes = () => {
    return (
        <BrowserRouter>
            <Navbar>
                <Routes>
                    <Route path="/" element={<Protected Component={Home} />} />
                    <Route path="/About" element={<Protected Component={About} />} />
                    <Route path="/Contact" element={<Protected Component={Contact} />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="Logout" element={<Protected Component={Logout} />} />
                </Routes>
            </Navbar>
        </BrowserRouter>
    );
}
