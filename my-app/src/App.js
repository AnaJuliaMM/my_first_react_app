import './App.css';
import Key from './components/Key/Key';
import React, {useState} from "react";


function App() {
  // Variável que imprime os valores das teclas
  const [display, setdisplay] = useState("");


    // Função que atualiza o valor do display da calculadora
    const handleKeyClick = (value) => {
      setdisplay(display + value)
    }

    // Função que deleta um valor do display da calculadora
    const handleKeyClickDelete = (value) => {
      setdisplay('')
    }

    // Função que realiza as operações matemáticas
    const computeValues = () => {
      // eval() - função que computa um código JavaScript representado como uma string.
      setdisplay(eval(display))
    }
    


  

  return (
    <div className="App">
      <h1>Calculator</h1>
      <span className='display'><h1>{display}</h1></span>
      <div className='Keyboard'>
        <Key value="0" onClick={handleKeyClick}/>
        <Key value="1" onClick={handleKeyClick}/>
        <Key value="2" onClick={handleKeyClick}/>
        <Key value="3" onClick={handleKeyClick}/>
        <Key value="4" onClick={handleKeyClick}/>
        <Key value="5" onClick={handleKeyClick}/>
        <Key value="6" onClick={handleKeyClick}/>
        <Key value="7" onClick={handleKeyClick}/>
        <Key value="8" onClick={handleKeyClick}/>
        <Key value="9" onClick={handleKeyClick}/>
        <Key value="+" onClick={handleKeyClick}/>
        <Key value="-" onClick={handleKeyClick}/>
        <Key value="/" onClick={handleKeyClick}/>
        <Key value="*" onClick={handleKeyClick}/>
        <Key value="=" onClick={computeValues}/>  
        <Key value="c" onClick={handleKeyClickDelete}/>
      </div>
     
    </div>
  );
}

export default App;
