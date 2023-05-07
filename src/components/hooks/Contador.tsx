import React, { useCallback, useEffect, useState,  } from 'react'

export default function Contador() {
  const [valor, setValor] = useState(0)  
  const [mult10, setMult10] = useState(0) 
  
    const calcularMulti10 = useCallback((valor: Number)=>{
        return (valor * 10)
    }, [])

    useEffect(() => {
        console.log('to no useeffect')
        const mult10= calcularMulti10(valor)
        setMult10(mult10)
    }, [valor, calcularMulti10])

  return (
    <div className='flex flex-col items-center gap-5'>
        <h1 className='text-4xl'>Contador</h1> 
        <span className='text-3xl'>{valor}</span>
        <span className='text-xl text-zinc-600'>Valor * 10: {mult10}</span>
        <div className='flex gap-5'>
            <button 
                className="botao"
                onClick={() => setValor(valor - 1)}
            >-1</button>
            <button 
                className="botao"
                onClick={() => setValor(valorAtual => valorAtual  + 1)}
            >+1</button>
        </div>
    </div>
    )
}
