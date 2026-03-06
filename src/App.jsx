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
import { ContactSection } from "./components/ContactSection"

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
      <section id="inicio" className="relative grid min-h-screen grid-cols-1 items-center overflow-hidden px-4 py-24 md:px-10 lg:h-screen lg:grid-cols-2 lg:px-12 lg:py-0">

        <AnimatedBackground />


        {/* COLUNA ESQUERDA */}
        <motion.div className="relative z-10 max-w-xl text-left">
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 sm:text-xs">
            FULL-STACK DEVELOPER & WEB DESIGNER - DISPONÍVEL PARA PROJETOS
          </span>

          <TypewriterName text="Sofia Parreira Passos" />

          <p className="mb-8 max-w-md text-zinc-500">
            Crio experiências digitais que unem forma e função.
            Especialista em desenvolvimento front-end, back-end e UX/UI.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-start">
            <PrimaryButton text="Ver Projetos" href="#projetos" />
            <PrimaryButton isLight text="Contato" href="#contato" />
          </div>
        </motion.div>

        {/* COLUNA DIREITA */}
        <div className="hidden lg:relative lg:inset-auto lg:flex lg:items-center lg:justify-center lg:opacity-80 lg:pointer-events-auto">
          <div className="scale-95 sm:scale-100 lg:scale-110">
            <TerminalScene />
          </div>
        </div>

      </section>


      <section id="servicos" className="bg-[var(--primary-dark)] px-4 py-16 md:px-10 lg:px-12">
        <div className="flex max-lg:flex-col lg:gap-8 gap-3">
          <div className="lg:w-[650px] w-full max-lg:mb-6">
            <h2 className="text-6xl text-white">Serviços</h2>
            <p className="text-zinc-100/90 text-sm lg:mt-4">Aqui estão alguns dos serviços que ofereço. Também aceitos propostas personalizadas, não estou engessada nestes.</p>
          </div>

          <motion.div
            className="grid 2xl:grid-cols-4 md:grid-cols-2 gap-4 items-center"
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
          className="relative mt-12 overflow-hidden border border-zinc-100/10 bg-gradient-to-r from-[var(--primary-dark)] via-zinc-800/60 to-[var(--primary-dark)] p-px md:mt-16">
          {/* Glow de borda */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

          <div className="relative flex flex-col items-start gap-6 bg-black/20 px-5 py-5 backdrop-blur-sm sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-6">
            {/* Ícone com halo */}
            <div className="flex flex-1 items-start gap-4 md:items-center md:gap-5">
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

            <PrimaryButton
              isLight
              text="Falar agora →"
              className="w-full justify-center md:w-auto"
              href="#contato"
            />
            {/* CTA */}

          </div>
        </motion.div>
      </section>

      <ProjectsSection />
      <ContactSection />



    </main>
  )
}

export default App
