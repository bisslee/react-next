import React from 'react'

interface CirculoProps{
    text: string
    quasePerfeito?: boolean 
}

export default function Circulo(props:CirculoProps) {
    
  return (
    <div className={`
    flex justify-center items-center
    h-64 w-64 bg-cyan-500 
    text-3xl text-bold
    ${props.quasePerfeito ? 'rounded-3xl': 'rounded-full'}

    `}>
        {props.text}
    </div>
  )
}
