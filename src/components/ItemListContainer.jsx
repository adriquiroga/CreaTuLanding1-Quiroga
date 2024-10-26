import React from 'react';
import '../css/ItemListContainer.css'; 

function ItemListContainer(props) {
    return (
        <div className="mi-contenedor">
            <h1>{props.texto}</h1>
            <p>{props.mensaje}</p>
        </div>
    );
}

export default ItemListContainer;
