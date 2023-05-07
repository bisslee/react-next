import Produto from "@/model/Produto";
import Image from "next/image";
import { IconShoppingCart } from "@tabler/icons-react";
import Moeda from "@/utils/Moeda";


interface ProdutoItemPropos{
    produto: Produto;
    comprar: (produto:Produto) => void; 
}


export default function ProdutoItem(props: ProdutoItemPropos){
    const {produto} = props
    return (
        <div className={`
            flex flex-col 
            rounded-lg overflow-hidden
            border border-zinc-700
            p-2
        `}>
        
            <Image 
                src={produto.imagem} 
                width={330} height={330} 
                alt={props.produto.descricao}
                className="rounded-lg"
            />
            <div className={`
                flex flex-col p-3 gap-3
            `}>
                <div className="flex justify-between items-center">
                    <div className="text-3xl font-black">{produto.nome}</div>
                    <div className="text-xl text-blue-600">{Moeda.formatar(produto.preco)}</div>
                </div>
                <div>
                    <div className="text-xl text-zinc-500">{produto.descricao}</div>
                </div>
                <div>
                    <button className="botao text-xl flex justify-center items-center w-full gap-2"
                        onClick={()=>props.comprar(produto)}
                    >   
                        <IconShoppingCart /> Comprar
                    </button>  
                </div>
            </div>
        </div>
    )

}