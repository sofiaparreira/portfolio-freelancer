import CardProject from '@/components/card/CardProject'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <main className=''>
      <Navbar />
      <section className='px-48 py-24 text-center flex flex-col justify-center items-center'>
        <h1 className='text-3xl mb-2 font-bold'>Meus Projetos</h1>
      <p className='text-gray-700'>Uma seleção dos meus trabalhos mais recentes</p>

      <div className='grid grid-cols-3 gap-8'>
       
      </div>
      </section>
      
    </main>
  )
}

export default page
