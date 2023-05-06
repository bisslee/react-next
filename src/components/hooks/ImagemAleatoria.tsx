import Image from "next/image";
import { useState } from "react";

export default function ImagemAleatoria() {

  const [search, setSearch] = useState<string>('abstract');
  const [size, setSize] = useState<number>(300);

  const url = 'https://source.unsplash.com/featured/';
  

  function urlImage(){
    return `${url}${size}x${size}?${search}`;
  }


  function renderButton(valor: string) {
    return (
      <button className={`
        bg-blue-500 px-3 py-2 rounded-xl
      `} onClick={() => {
          setSearch( valor);
          console.log(urlImage());
        }}>
        {valor}
      </button>
    )
  }

  return (
    <div className="flex flex-col gap-3  border border-zinc-500 p-7 rounded-md" >
      <div className="flex justify-center gap-5 m-3">
        <span>{search}:</span>
        <span>{size}x{size}</span>
      </div>
      <Image src={urlImage()} 
        height={400} width={400} 
        alt="imagem"
        className="rounded-xl" />
      <div className="flex justify-between gap-5">
        {renderButton('abstract')}
        {renderButton('city')}
        {renderButton('person')}
      </div>
      <div>
        <input 
          type="number" 
          value={size} 
          className="bg-zinc-800 p-2 rounded-md outline-none w-full"   
          onChange={
            e=>{
              setSize(+e.target.value);
            }
          }       
        />
      </div>
    </div>
  )
}

