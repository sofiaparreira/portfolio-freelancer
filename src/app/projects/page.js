import CardProject from '@/components/card/CardProject'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <main className=''>
      <Navbar />
      <section className='p-24 r flex flex-col justify-center items-center'>
        <h1 className='text-3xl mb-2 font-bold text-cente'>Meus Projetos</h1>
      <p className='text-gray-700 text-cente'>Uma seleção dos meus trabalhos mais recentes</p>

      <div className='grid xl:grid-cols-3 grid-cols-2 gap-8 mt-16'>
        <CardProject 
          image={'/projetos/meuapecerto.png'} 
          title={'Sistema para imobiliária'}
          client={'Meu Apê Certo'}
          description={'Fui responsável pelo front-end e parte do web design de um sistema para imobiliária, com dashboards e funcionalidades para administradores, incorporadoras e clientes.'} 
          date={'janeiro 2025 - o momento'}
          isFeatured={true}
        stack={['Next', 'TypeScript', 'Tailwind']}/>

        <CardProject 
          image={'/projetos/medico.png'} 
          title={'Portfólio de Médico'}
          client={'Dr. Thiago Brustolini'}
          description={'Criação completa do site de um portfólio médico no WordPress. '} 
          date={'janeiro 2025 - o momento'}
        stack={['WordPress']}/>

        <CardProject 
          image={'/projetos/meuapecerto.png'} 
          title={'ONG de adoção de cachorros e gatos'}
          client={'Instituto Anhangá'}
          description={'Fui responsável por todo o processo. Fiz a identidade visual, web design, front-end e sistema interno com back-end.'} 
          date={'janeiro 2025 - o momento'}
        stack={['Next', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL']}/>
      </div>  
      </section>
      
    </main>
  )
}

export default page
