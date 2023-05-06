import Evento from '@/components/basicos/Evento'
import React from 'react'

export default function PaginaEventos() {
  return (
    <div className='flex flex-wrap gap-5 h-screen justify-center items-center'>
        <Evento />
        <Evento />
        <Evento />
    </div>
    
  )
}
