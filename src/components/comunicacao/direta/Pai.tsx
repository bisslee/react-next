import Filho from "./Filho";
interface PaiProps{
    name: string;
    lastName: string;
}
export default function Pai(props: PaiProps) {
  return (
    <div className={`
        flex flex-col  gap-5
        bg-blue-500
        text-white
        border border-gray-400
        rouded-xl p-5

    `}>
        <div className="flex justify-center gap-2 text-2xl">
            <span className="font-bold">Pai:</span>
            <span>{props.name}</span>
            <span>{props.lastName}</span>
        </div>
        <div className="flex gap-5">
            <Filho name="Ana" lastName={props.lastName}/>
            <Filho name="Clara" lastName={props.lastName}/>
        </div>
        
    </div>
  )
}
