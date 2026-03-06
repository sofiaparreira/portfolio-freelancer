"use client"

import { ExternalLink } from "lucide-react"
import PrimaryButton from "../PrimaryButton"

export function ProjectCard({
  title,
  description,
  image,
  tags = [],
  liveUrl,
  githubUrl,
  isLarge = false,
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg bg-zinc-900 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] ${
        isLarge ? "md:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${isLarge ? "h-[360px] lg:h-[520px]" : "h-[300px] lg:h-[380px]"}`}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-zinc-900/20 to-transparent" />
      </div>

      <div className="relative bg-[var(--primary-dark)] p-5 md:p-8">
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-md border border-zinc-400/40 bg-zinc-950/70 px-3 py-1 text-[11px] font-semibold text-zinc-100 backdrop-blur-sm md:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-1 text-2xl font-bold text-white md:text-3xl">
          {title}
        </h3>

        <p className="mb-4 text-sm text-white/90 md:text-[15px]">
          {description}
        </p>

        <div className="flex gap-3">
          {liveUrl && (
            <PrimaryButton
              text="Ver Projeto"
              isLight
              href="#contato"
              icon={<ExternalLink size={16} />}
              className="px-5 py-2.5 text-[11px] md:px-8 md:py-3.5 md:text-xs"
            />
          )}
        </div>
      </div>
    </div>
  )
}
