import React, {useState} from "react";
import './style.css'


export default function Key({value, width, height, onClick}){

    // Função que executa a função onClick recebida como parâmetro
    const handleClick = () => {
        onClick(value);
    }

  return (
        <button className="key" onClick={handleClick}> {value} </button>
  );
}