import PrimaryButton from "./components/PrimaryButton"
import Header from "./components/Header"
import TerminalScene from './components/TerminalScene'
import './index.css'
import AnimatedBackground from "./components/AnimatedBackground"
import { motion } from 'framer-motion'
import TypewriterName from "./components/TypewriterName"
import ServiceCard from "./components/ServiceCard"
import { Code2, Lamp } from "lucide-react"
import { ProjectsSection } from "./components/ProjectSection"

function App() {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const othersServicesVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}
  return (
    <main className="">
      <Header />
      <section className="relative h-screen grid grid-cols-2 items-center px-12 overflow-hidden">

        <AnimatedBackground />


        {/* COLUNA ESQUERDA */}
        <motion.div className="z-10">
          <span className="text-xs uppercase tracking-widest text-zinc-500">
            FULL-STACK DEVELOPER & WEB DESIGNER - DISPONÍVEL PARA PROJETOS
          </span>

          <TypewriterName text="Sofia Parreira Passos" />

          <p className="text-zinc-500 max-w-md mb-8">
            Crio experiências digitais que unem forma e função.
            Especialista em desenvolvimento front-end, back-end e UX/UI.
          </p>

          <div className="flex gap-3">
            <PrimaryButton text="Ver Projetos" />
            <PrimaryButton isLight text="Contato" />
          </div>
        </motion.div>

        {/* COLUNA DIREITA */}
        <div className="relative flex justify-center items-center">
          <div className="opacity-80 scale-110">
            <TerminalScene />
          </div>
        </div>

      </section>


      <section className="bg-[var(--primary-dark)] py-16 px-12 ">
        <div className="flex gap-8">
          <div className="w-[600px]">
            <h2 className="text-6xl text-white">Serviços</h2>
            <p className="text-zinc-100/90 text-sm mt-4">Aqui estão alguns dos serviços que ofereço. Também aceitos propostas personalizadas, não estou engessada nestes.</p>
          </div>

          <motion.div
            className="flex gap-4 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={cardVariants}>
              <ServiceCard
                icon={<Code2 size={24} />}
                title="Sistemas Web"
                description="Criação de aplicações modernas com React, Next.js e foco em performance, SEO e escalabilidade."
              />
            </motion.div>

            <motion.div variants={cardVariants}>
              <ServiceCard
                icon={<Code2 size={24} />}
                title="Sistemas Web"
                description="Criação de aplicações modernas com React, Next.js e foco em performance, SEO e escalabilidade."
              />
            </motion.div>

            <motion.div variants={cardVariants}>
              <ServiceCard
                icon={<Code2 size={24} />}
                title="Sistemas Web"
                description="Criação de aplicações modernas com React, Next.js e foco em performance, SEO e escalabilidade."
              />
            </motion.div>

            <motion.div variants={cardVariants}>
              <ServiceCard
                icon={<Code2 size={24} />}
                title="Web designs"
                description="Criação de aplicações modernas com React, Next.js e foco em performance, SEO e escalabilidade."
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          variants={othersServicesVariants} 
          viewport={{once: true, amount: 0.2}}  
          initial="hidden"
          whileInView="visible" 
          className="relative mt-16 overflow-hidden border border-zinc-100/10 bg-gradient-to-r from-[var(--primary-dark)] via-zinc-800/60 to-[var(--primary-dark)] p-px">
          {/* Glow de borda */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

          <div className="relative flex items-center justify-between gap-6  bg-black/20 backdrop-blur-sm px-8 py-6">
            {/* Ícone com halo */}
            <div className="flex items-center gap-5 flex-1">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-full bg-gray-300/20 blur-lg scale-100" />
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700/60">
                  <Lamp size={22} className="text-white" />
                </div>
              </div>

              <div>
                <strong className="block text-white text-base font-semibold leading-tight">
                  Precisa de algo específico?
                </strong>
                <p className="text-zinc-300/80 text-sm mt-0.5">
                  Entre em contato para conversarmos sobre sua necessidade.
                </p>
              </div>
            </div>

            <PrimaryButton isLight text="Falar agora →" />
            {/* CTA */}

          </div>
        </motion.div>
      </section>

      <ProjectsSection />



    </main>
  )
}

export default App
