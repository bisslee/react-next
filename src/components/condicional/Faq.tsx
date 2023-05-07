import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
  const [active, setActive] = useState<number>(0)


  function alternateVisibility(id: number){
    if (id===active){
      setActive(-1)
    }
    else{
      setActive(id)
    }
  }

  return (
    <div className={`
      flex flex-col gap-2
      w-[90%]
      md:w-3/4
    `}>
      <Pergunta 
        id={0}
        open={active=== 0}
        alternateVisibility={alternateVisibility} 
        question="Qual a sua cor preferida" 
        answer="Azul" 

      />
      <Pergunta 
        id={1}
        open={active=== 1}
        alternateVisibility={alternateVisibility} 
        question="Mostra 2?" 
        answer="Dois" 
       />
      <Pergunta 
        id={2}
        open={active=== 2}
        alternateVisibility={alternateVisibility} 
        question="Musica preferida" 
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " 
      />
      <Pergunta 
        id={3}
        open={active=== 3}
        alternateVisibility={alternateVisibility} 
        question="Qual o nome da Biss?" 
        answer="Ivana" 
      />
    </div>
  )
}
