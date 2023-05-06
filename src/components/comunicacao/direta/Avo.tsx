import Pai from "./Pai";

interface AvoProps{
    name: string;
    lastName: string;
}

export default function Avo(props: AvoProps) {
  return (
    <div className={`
        flex flex-col gap-5 p-5
        bg-zinc-600 border border-gray-400
    `}>
        <div className="flex justify-center gap-2 text-3xl">
            <span className="font-bold">Avô:</span>
            <span>{props.name}</span>
            <span>{props.lastName}</span>
        </div>
        <div className="flex gap-5">
            <Pai name="Luiz" lastName={props.lastName}  />
            <Pai name="Carlos" lastName={props.lastName}  />
            <Pai name="Felipe" lastName={props.lastName}  />
        </div>
    </div>
  )
}
