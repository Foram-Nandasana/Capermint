import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
// import About from '../pages/About';
// import Contact from '../pages/Contact';
import { Login } from '../pages/login/Login';
import { Logout } from '../pages/login/Logout';
import { Protected } from '../common/Protected';
import { Sidebar } from '../common/Sidebar';
import { Product } from '../common/Product';
import { Item } from '../common/Item';
import { AddCart } from '../common/component/AddCart';
import ProductForm from '../pages/ProductForm';
import { Admin } from '../pages/Admin';
import { BuyNow } from '../pages/BuyNow';
import { Order } from '../pages/Order';
export const Allroutes = () => {
    return (
        <BrowserRouter>
            <Sidebar>
                <Routes>
                    <Route path="/" element={<Protected Component={Home} />} />
                    <Route path="/Product" element={<Protected Component={Product} />} />
                    {/* <Route path="/About" element={<Protected Component={About} />} /> */}
                    {/* <Route path="/Contact" element={<Protected Component={Contact} />} /> */}
                    <Route path="/Product/:id" element={<Item />} />
                    <Route path="/BuyNow/:id" element={<BuyNow/>}/>
                    <Route path="/ProductForm" element={<ProductForm />} />
                    <Route path="/Admin" element= {<Admin/>}/>
                    <Route path="/AddCart" element={<Protected Component={AddCart} />} />
                    <Route path="/Order" element={<Protected Component={Order}/>}/>
                    <Route path="Login" element={<Login />} />
                    <Route path="/Logout" element={<Protected Component={Logout} />} />
                </Routes>
            </Sidebar>
        </BrowserRouter>
    );
}
