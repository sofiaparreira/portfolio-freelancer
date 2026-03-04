import PrimaryButton from "./components/PrimaryButton"
import Header from "./components/Header"
import TerminalScene from './components/TerminalScene'
import './index.css'
import AnimatedBackground from "./components/AnimatedBackground"
import { motion } from 'framer-motion'
import TypewriterName from "./components/TypewriterName"
import ServiceCard from "./components/ServiceCard"
import { Code2, Lamp } from "lucide-react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

function App() {



  return (
    <main className="">
      <Header />
      <section className="relative h-screen grid grid-cols-2 items-center px-10 overflow-hidden">

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


      <section className="bg-[var(--primary-dark)] py-16 px-5 ">
        <div className="flex gap-8">
          <div className="w-[370px]">
            <h2 className="text-5xl text-white">Serviços</h2>
            <p className="text-zinc-100/90 text-sm mt-4">Aqui estão alguns dos serviços que ofereço. Também aceitos propostas personalizadas, não estou engessada nestes.</p>
          </div>
          <div className=" w-[calc(100%-400px)]">
            {/* conteúdo */}  <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={8}
              pagination={{ clickable: true }} // habilita pontinhos
              slidesPerView={4}
              autoplay={{ delay: 4000 }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
            >          <SwiperSlide>
                <ServiceCard
                  icon={<Code2 size={24} />}
                  title="Sistemas Web"
                  description="Criação de aplicações modernas com React, Next.js e foco em performance, SEO e escalabilidade."
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServiceCard
                  icon={<Code2 size={24} />}
                  title="Sistemas Web"
                  description="Criação de aplicações modernas com React, Next.js e foco em performance, SEO e escalabilidade."
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServiceCard
                  icon={<Code2 size={24} />}
                  title="Sistemas Web"
                  description="Criação de aplicações modernas com React, Next.js e foco em performance, SEO e escalabilidade."
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServiceCard
                  icon={<Code2 size={24} />}
                  title="Web designs"
                  description="Criação de aplicações modernas com React, Next.js e foco em performance, SEO e escalabilidade."
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServiceCard
                  icon={<Code2 size={24} />}
                  title="Sistemas Web"
                  description="Criação de aplicações modernas com React, Next.js e foco em performance, SEO e escalabilidade."
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServiceCard
                  icon={<Code2 size={24} />}
                  title="Sistemas Web"
                  description="Criação de aplicações modernas com React, Next.js e foco em performance, SEO e escalabilidade."
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServiceCard
                  icon={<Code2 size={24} />}
                  title="Sistemas Web"
                  description="Criação de aplicações modernas com React, Next.js e foco em performance, SEO e escalabilidade."
                />
              </SwiperSlide>
            </Swiper>
            <div className="flex justify-center gap-4 mt-4">
              <button className="custom-prev px-4 py-2 bg-zinc-700 text-white rounded-lg">◀</button>
              <button className="custom-next px-4 py-2 bg-zinc-700 text-white rounded-lg">▶</button>
            </div>
          </div>
        </div>
        \
        <div className="relative mt-16 overflow-hidden border border-zinc-100/10 bg-gradient-to-r from-[var(--primary-dark)] via-zinc-800/60 to-[var(--primary-dark)] p-px">
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
        </div>
      </section>

      <section className="bg-[var(--primary-light)] py-16 px-5">
          <h2 className="text-5xl text-[var(--primary-dark)]">Produtos</h2>


      </section>



    </main>
  )
}

export default App
