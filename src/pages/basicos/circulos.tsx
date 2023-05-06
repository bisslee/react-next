import Circulo from '@/components/basicos/Circulo'
import React from 'react'

export default function PageCirculos() {
  return (
    <div className={`
        flex justify-around
        items-center
        h-[400]
        bg-slate-600

        `}>
            <Circulo text="Circ #1"  quasePerfeito/>
            <Circulo text="Circ #2" />
            <Circulo text="Circ #3" />
        </div>
  )
}
