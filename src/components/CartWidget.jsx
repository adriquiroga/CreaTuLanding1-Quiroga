import React from 'react';
import carrito from '../assets/carrito.png'; 
import '../css/CartWidget.css';

function CartWidget({cantidad}) {
  return (
      <div className = "mi-carrito" >
          <img src={carrito} alt="Carrito"  />     
          {cantidad > 0 && (
        <span className="cantidad-productos">{cantidad}</span>
      )}     
      </div>         
  );
}

export default CartWidget;