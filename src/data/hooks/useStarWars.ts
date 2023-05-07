import useProcessando from '@/data/hooks/useProcessando'
import {useState} from 'react'

export default function useStarWars() {

    const {processando, iniciarProcessamnto, finalizarProcessamnto}= useProcessando()
    const [personagens, setPersonagens] = useState<any>([])

    async function chamadaAPI() {
        const response = await fetch('https://swapi.dev/api/people')
        const dados = await response.json()
        setPersonagens(dados.results)
     }

     async  function obterPersonagens(){
        try{
            iniciarProcessamnto()
            await chamadaAPI()
        }
        finally{
            finalizarProcessamnto()
        }
     }
    return {processando, personagens, obterPersonagens}
}