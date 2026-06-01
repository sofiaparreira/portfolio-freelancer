"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "../ProjectCard"
import meuapeProject from "../../assets/meuape-project.jpg"
import axyunProject from "../../assets/axyuncapital-project.png"
import verticeProject from "../../assets/vertice.png"
import sonoroDespertarProject from "../../assets/sonorodespertar.png"

const projects = [
  {
    id: 1,
    title: "Meu Apê Certo - Sistema de Imobiliária",
    description:
      "Plataforma completa para a imobiliária Meu Apê Certo, com funciondalidades de busca avançada de imóveis, módulos de pagamentos, gerenciamento de usuários, controle de permissões, análise de crédito, simulação financeira, dashbaords e estatísticas de empreendimentos, etc. ",
    image: meuapeProject,
    imagePosition: "center",
    tags: ["Next.js", "Node.js", "TypeScript", "Tailwind"],
    liveUrl: "https://app.meuapecerto.com.br",
  },
  {
    id: 2,
    title: "Axyun Capital - Site Institucional",
    description:
      "Site institucional desenvolvido para uma empresa de investimentos, com design moderno, responsivo e foco em experiência do usuário. O projeto foi otimizado para SEO e alta performance, garantindo melhor indexação nos mecanismos de busca e carregamento rápido das páginas.",
    image: axyunProject,
    imagePosition: "center",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    liveUrl: "https://axyuncapital.com",
  },
  {
    id: 3,
    title: 'Sonoro Despertar - Site Institucional',
    description: "Site institucional desenvolvido para uma instituição sem fins lucrativos que oferece aulas de flauta para crianças em situação de vulnerabilidade social. O projeto tem como objetivo promover educação, desenvolvimento pessoal por meio da música. Fui responsável pela criação da identidade visual, UX/UI e codificação do site.",
    image: sonoroDespertarProject,
    imagePosition: "top",
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://sonorodespertar.org.br'
  },
  {
    id: 4,
    title: "Vértice CyberSecurity - LandingPage",
    description:
      "Landing page desenvolvida para uma empresa de cibersegurança com foco na conversão de leads e fortalecimento da presença digital da marca. O projeto foi estruturado com design moderno, responsivo e otimizado para SEO e performance, proporcionando uma navegação intuitiva e destacando os principais serviços da empresa para maximizar a captação de potenciais clientes.",
    image: verticeProject,
    imagePosition: "center",
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
    <section id="projetos" className="min-h-screen bg-[var(--primary-light)] px-4 py-20 md:px-12 lg:px-20">
      <div className="mx-auto">
        <div className="mb-8 text-left">
          
          <h2 className="mb-1 text-6xl font-bold text-zinc-900 md:text-5xl lg:text-6xl">
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
