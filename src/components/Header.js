import React from 'react';
import "../Styles/main.css";
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <h2>Logo</h2>
            <nav>
                <NavLink to='/ '>Home</NavLink>
                <NavLink to='About '>About</NavLink>
                <NavLink to='/Contact '>Contact</NavLink>
                <NavLink to='/Login '>Login</NavLink>
                <NavLink to='/Logout '>Logout</NavLink>

            </nav>

        </header>
    )
}
export default Header;