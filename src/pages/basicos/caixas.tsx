import Caixa from '@/components/basicos/Caixa'
import React from 'react'

export default function PaginaCaixa() {
  return (
    <div className="flex gap-7 p-7">
            <Caixa>Banco</Caixa>
            <Caixa>Tomate</Caixa>
            <Caixa>Sonho</Caixa>
            <Caixa>
                <ul className="list-disc">
                    <li>um</li>
                    <li>dois</li>
                    <li>tres</li>
                </ul>
            </Caixa>
        </div>
  )
}
