interface BotoesProps{
    inc:(value: number)=> void;
    dec:(value: number)=> void;
}


export default function botoes(props: BotoesProps) {

  return (
    <div className="flex justify-between p-2 gap-3">
        <button 
            className="botao"
            onClick={()=> props.inc(10)}
        >+10</button>
        <button 
            className="botao"
            onClick={()=> props.dec(5)}
        >-5</button>
    </div>
  )
}
