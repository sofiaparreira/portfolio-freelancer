import { Code2 } from "lucide-react"


export default function ServiceCard({
  icon,
  title,
  description
}) {
  return (
    <div className="bg-[var(--primary-light)]/10 backdrop-blur-sm border border-[var(--primary-light)]/20 
                    rounded-2xl p-6 w-72 transition-all duration-300 
                    hover:-translate-y-2 hover:border-[var(--primary-light)] 
                    hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] w-full min-h-72">

      <div className="w-12 h-12 flex items-center justify-center 
                      rounded-xl bg-[var(--primary-light)]/20 
                      text-[var(--primary-light)] mb-4">
        {icon || <Code2 size={24} />}
      </div>

      <h3 className="text-3xl font-semibold text-white mb-1 ">
        {title}
      </h3>

      <p className="text-zinc-200/80 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}