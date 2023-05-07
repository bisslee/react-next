import { useState } from "react";
import If from "./If";
import IfElse from "./IfElse";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

interface PerguntaProps{
    id: number;
    question: string;
    answer: string;
    open: boolean;
    alternateVisibility: (id:number)=> void;
}

export default function Pergunta(props: PerguntaProps){
    // const [open, setOpen] = useState<boolean>(false);


  return (
    <div className={`
        border border-zinc-500 rounded-lg overflow-hidden

    `}>
        <div 
            className= {` 
                bg-zinc-800 p-5 
                cursor-pointer
                select-none       
                flex justify-between 
            `}            
            onClick={() => props.alternateVisibility(props.id)}
        >
            <span>
                {props.question}
                </span> 
                {props.open ? <IconChevronUp />:<IconChevronDown />}    
                {/* <IfElse  test={open}>
                    <IconChevronUp />
                    <IconChevronDown />
                </IfElse>           */}
        </div>
        <If test={props.open}>
            <div 
                className="p-5">
                {props.answer}
            </div>
        </If>

        
        
    </div>
  )
}
