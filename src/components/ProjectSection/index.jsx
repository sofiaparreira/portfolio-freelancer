"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "../ProjectCard"
import meuapeProject from "../../assets/meuape-project.jpg"
import axyunProject from "../../assets/axyuncapital-project.png"
import verticeProject from "../../assets/vertice-project.png"

const projects = [
  {
    id: 1,
    title: "Meu Apê Certo - Sistema de Imobiliária",
    description:
      "Plataforma completa para a imobiliária Meu Apê Certo, com funciondalidades de busca avançada de imóveis, módulos de pagamentos, gerenciamento de usuários e controle de permissões, análise de crédito, simulação financeira, dashbaords e estatísticas de imóveis e empreendimentos e muito mais. O projeto ainda está em desenvolvimento.",
    image: meuapeProject,
    tags: ["Next.js", "Node.js", "TypeScript", "Tailwind"],
    liveUrl: "https://app.meuapecerto.com.br",
  },
  {
    id: 2,
    title: "Axyun Capital - Site Institucional",
    description:
      "Site institucional desenvolvido para uma empresa de investimentos, com design moderno, responsivo e foco em experiência do usuário. O projeto foi otimizado para SEO e alta performance, garantindo melhor indexação nos mecanismos de busca e carregamento rápido das páginas.",
    image: axyunProject,
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    liveUrl: "https://axyuncapital.com",
  },
  {
    id: 3,
    title: "Vértice CyberSecurity - LandingPage",
    description:
      "Landing page desenvolvida para uma empresa de cibersegurança com foco em conversão de leads. O projeto foi estruturado com design moderno, responsivo e otimizado para SEO e performance, visando maximizar a captação de potenciais clientes.",
    image: verticeProject,
    tags: ["React.js", "JavaScript", "Tailwind"],
    liveUrl: "https://vertice-cybersecurity.vercel.app",
  },
]

export function ProjectsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 36,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="min-h-screen bg-[var(--primary-light)] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto">
        <div className="mb-8 text-left">
          
          <h2 className="mb-1 text-4xl font-bold text-zinc-900 md:text-5xl lg:text-6xl">
            Projetos </h2>
      
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
