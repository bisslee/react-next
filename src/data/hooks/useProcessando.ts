import {useState} from 'react'

export default function useProcessando() {
    const [processando, setProcessando] = useState<boolean>(false)


    function iniciarProcessamnto(){
        setProcessando(true)
    }

    
    function finalizarProcessamnto(){
        setProcessando(false)
    }

    return {
        processando, 
        iniciarProcessamnto, 
        finalizarProcessamnto
    }
}
