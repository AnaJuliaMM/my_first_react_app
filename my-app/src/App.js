import './App.css';
import Key from './components/Key/Key';
import React, {useState, useEffect} from "react";


function App() {
  // Variável que imprime os valores das teclas
  const [display, setdisplay] = useState("");
  // Variável para armazenamento do histório do cálculo: Local Storage
  const [history, setHistory] = useState([])


    // Função que atualiza o valor do display da calculadora
    const handleKeyClick = (value) => {
      setdisplay(display + value)
    }

    // Função que deleta um valor do display da calculadora
    const handleKeyClickClear = (value) => {
      setdisplay('')
    }

    // Função que realiza as operações matemáticas
    const computeValues = () => {
      try {
        // Armazena a expressão no display
        const operation = display

        // eval() - função que computa um código JavaScript representado por uma string. 
        const result = eval(display).toString()

        // Adiciona ao array 'history' o novo resultado
        // ([...] = Spread Operator): quebra um array e coloca dentro de outra coisa (tipo um append())
        const newHistory = [...history, operation + '=' + result ]
        
        //Exibindo o resultado no display
        setdisplay(result)

        //Atualizando o valor da lista de history
        setHistory(newHistory)

        // Adiciona o histórico de cálculos no localStorage
        saveHistory(newHistory)

      } catch (error) {
        // Em caso de erro, uma mensagem é exibida
        setdisplay('Error')
      }
    }
    
    const handleDelete= (index) => {
      // Novo array que remove o elemento pelo index
      let historyCopy = history.slice()
      historyCopy.splice(index, 1)
      setHistory(historyCopy)
      saveHistory(historyCopy)

    }

    const saveHistory = (newHistory)=>{
      localStorage.setItem('history', JSON.stringify(newHistory))
    }


    // Toda vez que a página for reiniciada 
    useEffect(() => {
      const storagedHistory = localStorage.getItem('history')
      setHistory(JSON.parse(storagedHistory))
    }, [])
    

  

  return (
    <div className="App">
      
      <div className='calculator'>
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
          <Key value="c" onClick={handleKeyClickClear}/>
        </div>
      </div>
      <div className='history'>
        <h1>History</h1>
        {history.map((value, index)=> (
        <div className='history-index'>
          <p><strong>{index + 1}.</strong> {value}</p>
          <button onClick={()=> {handleDelete(index)}}>X</button>
        </div>))}
      </div>
      
      
    </div>
  );
}

export default App;
