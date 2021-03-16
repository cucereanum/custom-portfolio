import React from 'react';
import "./NavBar.css";


function NavBar() {
    return (
         <nav className="nav">
            <h3 className="nav__header">MarioDev</h3>

           <ul className="nav__list">
               <li className="nav__listitem">About</li>
               <li className="nav__listitem">Projects</li>
               <li className="nav__listitem">Contacts</li></ul>  
         </nav>
    )
}

export default NavBar;
