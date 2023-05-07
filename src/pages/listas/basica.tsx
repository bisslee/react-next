import TabelaTimes from "@/components/listas/TabelaTimes"
import { IconBallFootball } from "@tabler/icons-react";

export default function PaginaListaBasica(){
    const teamsAFem = [
    	'Ferroviária',
        'Flamengo',
        'Corinthians',
        'Palmeiras',
        'Internacional',
        'Santos',
        'São Paulo',
        'Cruzeiro',
        'Bahia',
        'Grêmio',
        'Atlético-MG',
        'Athletico-PR',
        'Real Brasília',
        'Avaí/Kindermann',
        'Real Ariquemes',
        'Ceará'
    ]


    return(
            <div className={`
                flex flex-col justify-center items-center h-screen
            `}>
                <h1 className="flex items-center gap-3 text-5xl font-black">
                    <IconBallFootball size={50} stroke={1} color="gray" />
                    Times Série A Fem
                </h1>
                
                <TabelaTimes times={teamsAFem} ></TabelaTimes>
            </div>
        )
}