interface TabelaTimesProps{
    times: string

}

export default function TabelaTimes(props: TabelaTimesProps){
    // const items: any[]=[]

    // for(let i=0; i< props.times.length; i++){
    //     items.push(
    //         <li key={i} className="text-3xl list-decimal">
    //             {props.times[i]}
    //         </li>
    //     )
    // }

    const items2 = props.times.map((time, i) => {
        
        return (
            <li key={i} className={`
                text-3xl list-decimal ${i %2 === 0 ?'bg-gray-500': 'bg-gray-800'}
                `}>
                {time}
            </li>
        )
    }
        )

    return (
        <ol>
           {items2}
        </ol>  
        

    )
}