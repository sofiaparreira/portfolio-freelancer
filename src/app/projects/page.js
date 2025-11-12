import CardProject from '@/components/card/CardProject'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <main className=''>
      <Navbar />
      <section className='p-24 r flex flex-col justify-center items-center'>
        <h1 className='text-3xl mb-2 font-bold text-cente'>Meus Projetos</h1>
<div className='w-full flex justify-start items-start mt-16 mb-8'>
  <div className='relative pl-3 border-l-2 border-primary/40'>
    <p className='text-sm text-gray-600 leading-relaxed max-w-2xl'>
      <span className='text-primary font-semibold'>Nota:</span> Devido a contratos de confidencialidade, não posso mostrar todos os sites e sistemas que desenvolvi. Aqui estão apenas alguns exemplos do meu trabalho:
    </p>
  </div>
</div>

      <div className='grid xl:grid-cols-3 grid-cols-2 gap-8 mt-8'>
        <CardProject 
          onClick={'https://app.meuapecerto.com.br'}
          image={'/projetos/meuapecerto.png'} 
          title={'Sistema para imobiliária'}
          client={'Meu Apê Certo'}
          description={'Fui responsável pelo front-end e parte do web design de um sistema para imobiliária, com dashboards e funcionalidades para administradores, incorporadoras e clientes.'} 
          date={'janeiro 2025 - o momento'}
          isFeatured={true}
        stack={['Next', 'TypeScript', 'Tailwind']}/>

        <CardProject 
        onClick={'https://brustolini.com'}
          image={'/projetos/medico.png'} 
          title={'Portfólio de Médico'}
          client={'Dr. Thiago Brustolini'}
          description={'Criação completa do site de um portfólio médico no WordPress. '} 
          date={'janeiro 2025 (feito em 6 dias)'}
        stack={['WordPress']}/>

        <CardProject
          onClick={'https://voupen.com.br'}
          image={'/projetos/voupen.png'}
          title={'Site Corretora de Seguros'}
          client={'Lucas'}
          description={'Criação completa do site institucional da corretora de seguros Voupen no Wordpress. '}
          date={'setembro 2025 (feito em 7 dias)'}
          stack={['Wordpress']}

        />

        <CardProject
          onClick={'https://logistics-drone.onrender.com/drone/68da5d5ecf13fd01d3b45074'}
          image={'/projetos/drone.png'}
          title={'Logísica'}
          description={'Projeto desenvolvido como teste para um processo seletivo: um sistema de monitoramento de drones para entregas. Inclui otimização de rotas, acompanhamento em tempo real, gestão de prioridades de entrega, simulação de bateria e outras funcionalidades. Back-End e Front-End.'}
          date={'outubro 2025 (feito em 3 dias)'}
          stack={['Next.JS', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB']}
        />

        {/* <CardProject 
          image={'/projetos/meuapecerto.png'} 
          title={'ONG de adoção de cachorros e gatos'}
          client={'Instituto Anhangá'}
          description={'Fui responsável por todo o processo. Fiz a identidade visual, web design, front-end e api'} 
          date={'agosto 2025 - o momento'}
        stack={['Next', 'TypeScript', 'Tailwind', 'Node.js', 'mongoDB']}/> */}
      </div>  
      </section>
      
    </main>
  )
}

export default page
