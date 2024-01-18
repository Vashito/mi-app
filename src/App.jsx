import { useState } from 'react';
import './Miapp.css';


const App = () => {

  const [contador, setContador] = useState(0); //valor, el que modifica el valor(setfirst)
  

  return (
    <>
        <h1>Hola Estrellita</h1>
        <p1>GUTS</p1>
        <h2>Contador: {contador} </h2>
        <button id="btn-Incrementa" className="btns" onClick={() =>
          setContador(contador+1)}>Incrementa</button>
        <button id="btn-Decrementa" className="btns" onClick={() =>
          setContador(contador-1)
        }>Decrementa</button>
        <button id="btn-Reinicia" className="btns" onClick={() =>
          setContador(contador==0)}>Reinicia</button>
    </>
    
  )

}

export default App; //sedebe exportar
