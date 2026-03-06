"use client"

import { Mail, Phone, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  const contactInfo = {
    email: "sofiapparreira@gmail.com",
    phone: "+55 31 99905-0065",
  }
  const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactInfo.email)}`
  const whatsappUrl = `https://wa.me/${contactInfo.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Olá! Vim pelo seu portfólio e gostaria de fazer um orçamento.")}`

  return (
    <section id="contato" className="min-h-[55vh] scroll-mt-24 bg-[var(--primary-dark)] px-4 py-20 md:px-12 lg:px-20">
      <div className="mx-auto">
        <div className="mb-12 text-left">
          <h2 className="mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Contato
          </h2>
          <p className="max-w-2xl text-lg text-zinc-300">
            Vamos conversar? Entre em contato comigo.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          <a
            href={emailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-1 items-center justify-between bg-[var(--primary-light)] p-5 transition-all duration-300 hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-900/20 md:p-8"
          >
            <div className="flex items-center gap-3 md:gap-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800 transition-colors group-hover:bg-zinc-700 md:h-14 md:w-14">
                <Mail className="h-5 w-5 text-white md:h-6 md:w-6" />
              </div>
              <div>
                <span className="block text-xs font-medium text-zinc-600 transition-colors group-hover:text-zinc-300 md:text-sm">Email</span>
                <span className="text-base font-semibold text-zinc-900 transition-colors group-hover:text-white md:text-xl">{contactInfo.email}</span>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-zinc-700 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white md:h-6 md:w-6" />
          </a>

          <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            className="group flex flex-1 items-center justify-between bg-[var(--primary-light)] p-5 transition-all duration-300 hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-900/20 md:p-8"
          >
            <div className="flex items-center gap-3 md:gap-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800 transition-colors group-hover:bg-zinc-700 md:h-14 md:w-14">
                <Phone className="h-5 w-5 text-white md:h-6 md:w-6" />
              </div>
              <div>
                  <span className="block text-xs font-medium text-zinc-600 transition-colors group-hover:text-zinc-300 md:text-sm">WhatsApp</span>
                  <span className="text-base font-semibold text-zinc-900 transition-colors group-hover:text-white md:text-xl">{contactInfo.phone}</span>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-zinc-700 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white md:h-6 md:w-6" />
          </a>
        </div>

        <footer className="mt-12 border-t border-zinc-700/60 pt-6 text-center text-xs uppercase tracking-[0.12em] text-zinc-400">
          © 2026 Sofia Parreira Passos. Todos os direitos reservados.
        </footer>
      </div>
    </section>
  )
}
