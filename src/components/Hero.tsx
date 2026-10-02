import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { wedding } from '../data/weddingData'
import { TemplePortal } from './TemplePortal'
import { Ornament } from './Ornament'

const backdrop =
  'bg-[radial-gradient(130%_95%_at_50%_18%,#311119_0%,#1b0b0f_46%,#0b0608_100%)]'

export function Hero() {
  const reduce = useReducedMotion() ?? false
  const trackRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.32])
  const leftX = useTransform(scrollYProgress, [0.1, 0.92], ['0%', '-62%'])
  const rightX = useTransform(scrollYProgress, [0.1, 0.92], ['0%', '62%'])
  const glow = useTransform(scrollYProgress, [0.12, 0.62], [0, 1])
  const templeOpacity = useTransform(scrollYProgress, [0.72, 1], [1, 0])
  const textOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.22], ['0%', '-12%'])
  const cueOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  const headline = (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center [text-shadow:0_2px_20px_rgba(0,0,0,0.6)]">
      <p className="eyebrow text-gold-soft">A Celebration of Love</p>
      <Ornament className="mt-4" tone="text-gold-soft" />
      <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
        <span className="block">{wedding.groom.name}</span>
        <span className="my-1 block font-serif text-2xl italic text-gold-soft sm:text-3xl">
          weds
        </span>
        <span className="block">{wedding.bride.name}</span>
      </h1>
      <p className="mt-6 font-serif text-lg tracking-[0.25em] text-ivory/90 sm:text-xl">
        {wedding.weddingDateLabel}
      </p>
    </div>
  )

  // Reduced motion: a still, dignified cover with no portal movement.
  if (reduce) {
    return (
      <section aria-label="Wedding invitation cover" className={`relative h-screen w-full overflow-hidden ${backdrop}`}>
        <TemplePortal
          reduced
          scale={scale}
          leftX={leftX}
          rightX={rightX}
          glow={glow}
          templeOpacity={templeOpacity}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_52%_at_50%_30%,rgba(11,6,8,0.7),transparent_74%)]" />
        <div className="absolute inset-x-0 top-[14%] z-10">{headline}</div>
      </section>
    )
  }

  return (
    <section ref={trackRef} aria-label="Wedding invitation cover" className="relative h-[200vh] w-full">
      <div className={`sticky top-0 h-screen w-full overflow-hidden ${backdrop}`}>
        <TemplePortal
          reduced={false}
          scale={scale}
          leftX={leftX}
          rightX={rightX}
          glow={glow}
          templeOpacity={templeOpacity}
        />

        <motion.div
          aria-hidden="true"
          style={{ opacity: textOpacity }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_52%_at_50%_30%,rgba(11,6,8,0.7),transparent_74%)]"
        />

        <motion.div style={{ opacity: textOpacity, y: textY }} className="absolute inset-x-0 top-[14%] z-10">
          {headline}
        </motion.div>

        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute inset-x-0 bottom-10 z-10 flex flex-col items-center gap-2 text-ivory/80"
        >
          <span className="text-[0.7rem] uppercase tracking-luxe">Scroll to enter</span>
          <ChevronDown className="h-5 w-5 animate-scroll-cue" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  )
}
