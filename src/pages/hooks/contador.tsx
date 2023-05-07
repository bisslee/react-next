import Contador from '@/components/hooks/Contador'
import React from 'react'

export default function contador() {
  return (
    <div className={`
        flex flex-col items-center justify-center h-screen
    `}>
        <Contador/>
    </div>
    
  )
}
