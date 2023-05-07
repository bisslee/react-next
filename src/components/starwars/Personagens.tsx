interface PersonagensProps{
    personagens:any[]
}

export default function Personagens(props: PersonagensProps) {
    
    function rederizarPersonagem(){
        return(
            <ul>
                {
                    props.personagens.map((p:any) => (
                        <li key={p.name}>{p.name}</li>
                    ))
                }
            </ul>
        )
    }
    return ( rederizarPersonagem() )
}

