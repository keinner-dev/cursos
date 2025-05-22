import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function SingInPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 p-4'>
        <h1 className='font-semibold text-4xl'>Bienvenido de nuevo</h1>
        <p className='text-xl'>Inicia sesion para continuar a tu cuenta</p>
        <SignIn />
    </div>
  )
}
