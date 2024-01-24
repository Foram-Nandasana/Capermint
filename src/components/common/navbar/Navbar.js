import React, { useState } from 'react';
import {
    FaUserAlt,
    FaCommentAlt,
    FaLock,
    FaHome,
    FaUnlock
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Navbar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <FaHome />
        },
        {
            path: "/About",
            name: "About",
            icon: <FaUserAlt />
        },
        {
            path: "/Contact",
            name: "Contact",
            icon: <FaCommentAlt />
        },
        {
            path: "/Login",
            name: "Login",
            icon: <FaUnlock />
        },
        {
            path: "/Logout",
            name: "Logout",
            icon: <FaLock />
        }
    ]

    return (
        <div className="container">
            <div style={{ width: isOpen ? "300px" : "90px" }} className="sidebar">
                <div className="top_section">
                    <div style={{ marginLeft: isOpen ? "4px" : "-5px" }} className="bars">
                        <img src="image/Capermint.png" alt="Logo" width={50} onClick={toggle} />
                    </div>
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Capermint</h1>

                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))

                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Navbar;