"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaCode } from 'react-icons/fa'

const Navbar = () => {

    const pathname = usePathname()

  return (
    <nav className='bg-white px-48 w-full fixed py-3 flex justify-between items-center border-b border-gray-200 shadow-[0_35px_35px_rgb(0_0_0_/_0.04)]  '>
        <div className='flex justify-center items-center gap-3'>
            <div className='bg-gradient-to-r from-primary to-purple-600 text-white p-2 rounded-lg w-fit group-hover:scale-110 duration-300 transition'><FaCode /></div>
            <span className='text-lg font-semibold'>Sofia Parreira</span>
        </div>
        <ul className='flex justify-center items-center gap-8'>
            <li 
                className={`text-sm font-medium py-1 px-2 cursor-pointer ${pathname === '/' ? 'border-b-2 border-primary text-primary' : ''}`}><Link href={'/'}>Início</Link></li>
            <li className={`text-sm font-medium py-1 px-2 cursor-pointer ${pathname === '/projects' ? 'border-b-2 border-primary text-primary' : ''}`}><Link href={'/projects'}>Projetos</Link></li>
            <li className={`text-sm font-medium py-1 px-2 cursor-pointer ${pathname === '/contact' ? 'border-b-2 border-primary text-primary' : ''}`}>Contato</li>
        </ul>
    </nav>
  )
}

export default Navbar
