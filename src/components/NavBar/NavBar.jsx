import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";

const linkStyle = {textDecoration:'none', color:'inherit'};


function NavBar() {
    return (
         <nav className="nav">
              <Link style={linkStyle} to="/">
            <h3 data-aos="fade-right" 
    data-aos-duration="1000" className="nav__header">MarioDev</h3>
    </Link>
           <ul data-aos="fade-left" 
    data-aos-duration="1000" className="nav__list">
                  <Link style={linkStyle} to="/">
                     <li className="nav__listitem">About</li>
             </Link>
            <Link style={linkStyle} to="/projects">
                <li className="nav__listitem">Projects</li>
            </Link>
               
               <Link style={linkStyle} to="/contacts">
                <li className="nav__listitem">Contacts</li>
            </Link>
               
              </ul>
         </nav>
    )
}

export default NavBar;
