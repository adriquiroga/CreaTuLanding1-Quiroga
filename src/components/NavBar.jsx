import React from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png'; 
import '../css/NavBar.css';

function NavBar() {
    return (
        <nav className="barra-navegacion">
            <img src={logo} className = "logo" alt="Logo de Nature House"/>
            <ul >
              <li><a href="#">Línea Facial</a></li>
              <li><a href="#">Línea Corporal</a></li>
              <li><a href="#">Maquillaje</a></li>
              <li><a href="#">Cabello</a></li>      
              <CartWidget cantidad={5}/>       
            </ul>                                        
        </nav>
    );
}

export default NavBar;