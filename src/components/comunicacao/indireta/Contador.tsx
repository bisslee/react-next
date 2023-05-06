import Display from "./Display";
import Botoes from "./Botoes";
import { useState } from "react";


export default function Contador() {
    const [num, setNum] = useState<number>(0);
   
    function increment(value: number) {
        setNum(num + value);
    }

    function decrement(value: number) {
        setNum(num - value);
    }

  return (
    <div className={`
        flex flex-col p-2 w-72 h-72
        border border-zinc-500 rounded-lg 
    `}>    
        <Display valor={num} />
        <Botoes inc={increment} dec={decrement} />
    </div>
  )
}
