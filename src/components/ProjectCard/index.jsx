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
      className={`group relative overflow-hidden rounded-2xl bg-zinc-900 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] ${
        isLarge ? "md:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${isLarge ? "h-[600px]" : "h-[460px]"}`}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-zinc-900/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-5/6 bg-gradient-to-t from-black via-zinc-950/80 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full border border-zinc-400/40 bg-zinc-950/70 px-3 py-1 text-xs font-semibold text-zinc-100 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className={`mb-1 font-bold text-white text-3xl`}>
          {title}
        </h3>

        <p className={`mb-4 text-white/90 text-[15px]`}>
          {description}
        </p>

        <div className="flex gap-3">
          {liveUrl && (
            <PrimaryButton
              text="Ver Projeto"
              isLight
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={<ExternalLink size={16} />}
            />
          )}
        </div>
      </div>
    </div>
  )
}
