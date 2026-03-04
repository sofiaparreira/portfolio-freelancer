import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion"
import { useRef } from "react"
import ServiceCard from "../ServiceCard"
import { Code2 } from "lucide-react"

export default function ServiceSection() {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })
  const maskImage = useScrollOverflowMask(scrollXProgress)

  return (
    <section className="bg-[var(--primary-dark)] py-28 px-10 overflow-hidden" >

      <div className="mb-12">
        <h2 className="text-5xl text-white mb-4">Serviços</h2>
        <p className="text-zinc-400 max-w-xl">
          Aqui estão alguns dos serviços que ofereço.
        </p>
      </div>

      <div className="relative">

        {/* Progress Circle */}
        <svg
          width="70"
          height="70"
          viewBox="0 0 100 100"
          className="absolute -top-16 left-0 rotate-[-90deg]"
        >
          <circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="stroke-zinc-800"
            strokeWidth="10"
            fill="none"
          />

          <motion.circle
            cx="50"
            cy="50"
            r="30"
            stroke="var(--primary-light)"
            strokeWidth="10"
            fill="none"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>

        {/* Slider */}
        <motion.div
          ref={ref}
          style={{ maskImage }}
          className="flex gap-3 overflow-x-scroll py-6 scroll-smooth"
        >
          <div className="min-w-[300px]">
            <ServiceCard
              icon={<Code2 size={24} />}
              title="Sistemas Web"
              description="Aplicações modernas com React e Next."
            />
          </div>

          <div className="min-w-[300px]">
            <ServiceCard
              icon={<Code2 size={24} />}
              title="Site Institucional"
              description="Sites rápidos e estratégicos."
            />
          </div>

          <div className="min-w-[300px]">
            <ServiceCard
              icon={<Code2 size={24} />}
              title="Landing Pages"
              description="Alta conversão e performance."
            />
          </div>

          <div className="min-w-[300px]">
            <ServiceCard
              icon={<Code2 size={24} />}
              title="Web Design"
              description="Interfaces modernas e intuitivas."
            />
          </div>

          <div className="min-w-[300px]">
            <ServiceCard
              icon={<Code2 size={24} />}
              title="E-commerce"
              description="Lojas online escaláveis."
            />
          </div>

          <div className="min-w-[300px]">
            <ServiceCard
              icon={<Code2 size={24} />}
              title="APIs"
              description="Integrações backend robustas."
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        ::-webkit-scrollbar {
          height: 6px;
        }

        ::-webkit-scrollbar-thumb {
          background: var(--primary-light);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #ffffff10;
        }
      `}</style>

    </section>
  )
}

const left = `0%`
const right = `100%`
const leftInset = `20%`
const rightInset = `80%`
const transparent = `#0000`
const opaque = `#000`

function useScrollOverflowMask(scrollXProgress) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  )

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      )
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      )
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      )
    }
  })

  return maskImage
}