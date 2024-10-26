import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer
      texto="Bienvenido a Nature House" 
      mensaje="Explora nuestro catálogo de productos naturales." />
    </>
  );
}

export default App;
