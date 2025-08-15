import React from 'react'
import { FaCode } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='py-12 bg-gray-800 text-white flex flex-col gap-3'>
      <div className='flex justify-center items-center gap-3'>
        <div className='bg-gradient-to-r from-primary to-purple-600 text-white p-2 rounded-lg w-fit group-hover:scale-110 duration-300 transition'><FaCode /></div>
        <span className='text-lg font-semibold'>Sofia Parreira</span>
      </div>
      <p className='text-center text-gray-300'>Desenvolvedora web front-end e back-end • Criando soluções digitais excepcionais</p>
      <p className='text-sm text-center text-gray-400'>© 2025 Todos os direitos reservados</p>
    </footer>
  )
}

export default Footer
