import { motion, useReducedMotion, type Variants } from 'framer-motion'

interface ToranaProps {
  className?: string
  tone?: string
}

const SCALLOPS = 10
const WIDTH = 1200
const STEP = WIDTH / SCALLOPS

// Festoon of hanging arcs.
const festoon = Array.from({ length: SCALLOPS }).reduce<string>((d, _, i) => {
  const cx = i * STEP + STEP / 2
  const ex = (i + 1) * STEP
  return `${d} Q ${cx} 60 ${ex} 16`
}, 'M0 16')

const joints = Array.from({ length: SCALLOPS + 1 }).map((_, i) => i * STEP)

const stroke = {
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.2,
  strokeLinecap: 'round' as const,
  vectorEffect: 'non-scaling-stroke' as const,
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
}
const drawPath: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 1.1, ease: 'easeInOut' } },
}

/** Decorative hanging that reads as a mandap/torana entrance across a section top. */
export function Torana({ className = '', tone = 'text-gold-soft' }: ToranaProps) {
  const reduce = useReducedMotion()

  const svgProps = {
    viewBox: `0 0 ${WIDTH} 72`,
    preserveAspectRatio: 'none',
    'aria-hidden': true,
    className: `h-14 w-full sm:h-16 ${tone} ${className}`,
  }

  const drops = joints.map((x, i) => {
    const isCenter = i === SCALLOPS / 2
    const depth = isCenter ? 46 : 30
    return (
      <g key={x}>
        <motion.path variants={reduce ? undefined : drawPath} d={`M${x} 16 L${x} ${depth}`} {...stroke} />
        {/* small hanging leaf / bell */}
        <motion.path
          variants={reduce ? undefined : drawPath}
          d={`M${x} ${depth} c-4 3 -4 7 0 10 4 -3 4 -7 0 -10Z`}
          {...stroke}
        />
      </g>
    )
  })

  if (reduce) {
    return (
      <svg {...svgProps}>
        <path d={`M0 10 H${WIDTH}`} {...stroke} />
        <path d={festoon} {...stroke} />
        {drops}
      </svg>
    )
  }

  return (
    <motion.svg
      {...svgProps}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      <motion.path variants={drawPath} d={`M0 10 H${WIDTH}`} {...stroke} />
      <motion.path variants={drawPath} d={festoon} {...stroke} />
      {drops}
    </motion.svg>
  )
}
