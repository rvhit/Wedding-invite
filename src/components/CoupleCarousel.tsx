import { useCallback, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { wedding } from '../data/weddingData'
import { Reveal } from './Reveal'
import { MotifDivider } from './MotifDivider'

export function CoupleCarousel() {
  const images = wedding.gallery
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir)
      setIndex((prev) => (prev + dir + images.length) % images.length)
    },
    [images.length],
  )

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      paginate(-1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      paginate(1)
    }
  }

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: reduce ? 0 : dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: reduce ? 0 : dir > 0 ? -40 : 40 }),
  }

  const current = images[index]

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="bg-ivory-deep section-pad">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="eyebrow text-gold">Photographic Memories</p>
          <h2 id="gallery-heading" className="mt-4 font-display text-4xl text-maroon sm:text-5xl">
            Moments we hold close.
          </h2>
          <MotifDivider variant="lotus" className="mt-8" />
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div
            role="group"
            aria-roledescription="carousel"
            aria-label="Couple photo gallery"
            tabIndex={0}
            onKeyDown={onKeyDown}
            className="relative mx-auto max-w-xl focus:outline-none"
          >
            <div className="foil-frame relative aspect-[4/5] overflow-hidden bg-brown/5">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                  key={index}
                  src={current?.src}
                  alt={current?.alt ?? `Photograph ${index + 1} of ${images.length}`}
                  loading="lazy"
                  decoding="async"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  drag={reduce ? false : 'x'}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) paginate(1)
                    else if (info.offset.x > 60) paginate(-1)
                  }}
                  className="absolute inset-0 h-full w-full cursor-grab object-cover active:cursor-grabbing"
                />
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Previous photo"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-maroon transition-colors hover:bg-maroon hover:text-ivory"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-2" role="tablist" aria-label="Choose photo">
                {images.map((img, i) => (
                  <button
                    key={img.src + i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Go to photo ${i + 1}`}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1)
                      setIndex(i)
                    }}
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === index ? 'w-5 bg-gold' : 'bg-gold/40 hover:bg-gold/70'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Next photo"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-maroon transition-colors hover:bg-maroon hover:text-ivory"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <p aria-live="polite" className="sr-only">
              {`Photo ${index + 1} of ${images.length}`}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
