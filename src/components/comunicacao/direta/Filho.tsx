interface FilhoProps{
    name: string;
    lastName: string;
}
export default function Filho(props: FilhoProps) {
  return (
    <div className={`
        flex justify-center items-center
        bg-green-900 rounded-md p-5
        border border-gray-400
    `}>
         <div className="flex justify-center gap-2 text-2xl">
            {/* <span className="font-bold">Filho</span> */}
            <span>{props.name}</span>
            <span>{props.lastName}</span>
        </div>
        
    </div>
  )
}
