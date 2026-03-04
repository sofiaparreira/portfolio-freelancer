import { motion } from "framer-motion"

export default function TerminalWidget() {
  return (
    <div className="w-[380px] h-[230px] relative">
      <motion.svg
        viewBox="0 0 380 230"
        className="w-full h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Soft background */}
        <defs>
          <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1c1c1c" />
            <stop offset="100%" stopColor="#161616" />
          </linearGradient>

          <filter id="softBlur">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Glow */}
        <rect
          x="15"
          y="15"
          width="350"
          height="200"
          rx="18"
          fill="#000"
          opacity="0.2"
          filter="url(#softBlur)"
        />

        {/* Main panel */}
        <rect
          x="15"
          y="15"
          width="350"
          height="200"
          rx="18"
          fill="url(#bgGradient)"
          stroke="#2a2a2a"
          strokeWidth="1"
        />

        {/* Header */}
        <rect
          x="15"
          y="15"
          width="350"
          height="34"
          rx="18"
          fill="#202020"
          opacity="0.6"
        />

        {/* Minimal header dots */}
        <circle cx="40" cy="32" r="4" fill="#6b7280" />
        <circle cx="55" cy="32" r="4" fill="#6b7280" />
        <circle cx="70" cy="32" r="4" fill="#6b7280" />

        {/* Code text */}
        <CodeLine y={75} delay={0.2}>
          <tspan fill="#9ca3af">const</tspan>
          <tspan fill="#e5e7eb"> developer </tspan>
          <tspan fill="#9ca3af">=</tspan>
          <tspan fill="#60a5fa"> "Sofia"</tspan>
        </CodeLine>

        <CodeLine y={100} delay={0.5}>
          <tspan fill="#9ca3af">function</tspan>
          <tspan fill="#e5e7eb"> buildExperience</tspan>
          <tspan fill="#e5e7eb">()</tspan>
        </CodeLine>

        <CodeLine y={125} delay={0.8}>
          <tspan fill="#e5e7eb">{"{"}</tspan>
        </CodeLine>

        <CodeLine y={150} delay={1.1} indent>
          <tspan fill="#9ca3af">return</tspan>
          <tspan fill="#34d399"> "clean + functional"</tspan>
        </CodeLine>

        <CodeLine y={175} delay={1.4}>
          <tspan fill="#e5e7eb">{"}"}</tspan>
        </CodeLine>

        {/* Cursor */}
        <motion.rect
          x="250"
          y="138"
          width="7"
          height="16"
          fill="#e5e7eb"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  )
}

function CodeLine({ y, delay, children, indent }) {
  return (
    <motion.text
      x={indent ? 55 : 35}
      y={y}
      fontSize="14"
      fontFamily="monospace"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      {children}
    </motion.text>
  )
}