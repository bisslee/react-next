import Background from '@/components/starwars/Background'
import Personagens from '@/components/starwars/Personagens'
import useStarWars from '@/data/hooks/useStarWars'

export default function PaginaStarWars() {
    const {processando, personagens, obterPersonagens}= useStarWars()
 
  return (
    <div className={`
        flex flex-col justify-center items-center h-screen gap-5
        `}>
        <Background/>
        <button onClick={obterPersonagens} 
            className="bg-blue-700 p-4"
        >
            obter
        </button>
        {processando ? (
            <div>Processando a chamada dos personagens...</div>
            )
            : personagens.length > 0 ? 
            (
                <Personagens personagens={personagens} />        
            )
            :  <h1>Não tem personagens</h1>
            
        }
        
    </div>
  )
}

