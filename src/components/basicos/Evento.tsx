import React from 'react'

export default function Evento() {
  let counter = 0;

  function increment() {
    console.log(counter++);
  }
    
  return (
    <button className={`
        flex justify-center items-center
        h-72 w-72 bg-green-600
        text-4xl
    `} onClick={increment}>
        Evento: {counter}
    </button>
  )
}
