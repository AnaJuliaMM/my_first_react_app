import React, {useState} from "react";

export default function Counter(){
    // utilização de useState para a variável number
    const [number, setNumber] = useState(0);

    // Função que realiza o incremento do número
    const handAddedNumber =  () => {
        setNumber(number + 1)
        
    }

    // Função que realiza o incremento do número
    const handSubtractedNumber =  () => setNumber(number - 1)

    // Função que realiza o incremento do número
    const handResetNumber =  () => setNumber(0)



  return (
    <div>
        <p>Contador: {number}</p>
        <div >
            <button onClick={handAddedNumber}> + </button>
            <button onClick={handSubtractedNumber}> - </button>
        </div>
            <button onClick={handResetNumber}> Reset</button>
    </div>
    

  );
}
