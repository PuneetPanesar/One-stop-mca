import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props =>{
    return(
        <ul className="nav-links">
        <li>
        <NavLink to="/" exact>Sign Up</NavLink>
        </li>
        <li>
        <NavLink to="/" exact>About Us</NavLink>
        </li>
       
        </ul>
    );
};

export default NavLinks;