import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
<header className="header">
    <div className="header_container">
        <div className="header_nav">
            <div className="header_nav_logo"> </div>
             <div className="header_links">
                <ul className="ul">
                    <li className="li"><NavLink to='/'>Home</NavLink></li>
                    <li className="li"><NavLink to='/post'>Post</NavLink></li>
                    <li className="li"><NavLink to='/photo'>Photo</NavLink></li>
                    <li className="li"><NavLink to='/contact'>Contacts</NavLink></li>
                </ul>
             </div>
               
        </div>

    </div>
</header>
    );
};

export default Header;