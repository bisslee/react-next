interface PersonagensProps{
    personagens:any[]
}

export default function Personagens(props: PersonagensProps) {
    
    return (
        <div className={`flex flex-col`}>
            <ul>
                {
                    props.personagens.map((p:any) => (
                        <li key={p.name}>{p.name}</li>
                    ))
                }
            </ul>
        </div>
  )
}

