import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../store/auth-context';
import { useHistory } from 'react-router';
import './NavLinks.css';

const NavLinks = props => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const history=useHistory();
    const logOutHandler = () => {
        authCtx.logout();
        history.replace('/auth');
    }
    return (
        <ul className="nav-links">
            <li>
                {!isLoggedIn && (<NavLink to="/auth" exact>
                    Log in
                </NavLink>)}
            </li>
            <li>
                <NavLink to="/aboutus" exact>About Us</NavLink>
            </li>
            <li>
                <NavLink to="/faq" exact>FAQs</NavLink>
            </li>
            <li>
                {isLoggedIn && (<button className="logout-btn" onClick={logOutHandler}>Logout</button>)}
            </li>
        </ul>
    );
};

export default NavLinks;