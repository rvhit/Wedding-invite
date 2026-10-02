import { wedding } from '../data/weddingData'
import { Reveal } from './Reveal'
import { MotifDivider } from './MotifDivider'
import { FloralMotif } from './FloralMotif'

export function Invitation() {
  return (
    <section id="invitation" aria-labelledby="invitation-heading" className="relative overflow-hidden bg-ivory section-pad">
      <FloralMotif
        tone="text-gold"
        className="pointer-events-none absolute -right-16 -top-10 h-56 w-56 opacity-[0.06]"
      />
      <FloralMotif
        tone="text-gold"
        className="pointer-events-none absolute -bottom-12 -left-16 h-56 w-56 opacity-[0.06]"
      />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <Reveal>
          {/* Ornamental medallion carrying the Ganesh invocation. */}
          <svg
            width="84"
            height="84"
            viewBox="0 0 84 84"
            fill="none"
            className="text-gold"
            aria-hidden="true"
          >
            <circle cx="42" cy="42" r="40" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <circle cx="42" cy="42" r="33" stroke="currentColor" strokeWidth="0.8" opacity="0.8" />
            <path
              d="M42 20c7 7 7 15 0 22-7-7-7-15 0-22Z"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path d="M42 62c7-7 7-15 0-22-7 7-7 15 0 22Z" stroke="currentColor" strokeWidth="1" />
            <path d="M20 42c7-7 15-7 22 0-7 7-15 7-22 0Z" stroke="currentColor" strokeWidth="1" />
            <path d="M64 42c-7-7-15-7-22 0 7 7 15 7 22 0Z" stroke="currentColor" strokeWidth="1" />
            <circle cx="42" cy="42" r="3" fill="currentColor" />
          </svg>
        </Reveal>

        <Reveal delay={0.05}>
          <p lang="sa" className="mt-6 font-devanagari text-3xl text-maroon sm:text-4xl">
            {wedding.sanskritBlessing}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <MotifDivider variant="lotus" className="my-8" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 id="invitation-heading" className="sr-only">
            The Invitation
          </h2>
          <p className="max-w-xl font-serif text-xl leading-relaxed text-brown/90 sm:text-2xl">
            {wedding.blessing}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 grid gap-6 text-brown/80 sm:grid-cols-2 sm:gap-16">
            <div>
              <p className="eyebrow mb-2 text-gold">With the blessings of</p>
              <p className="font-serif text-lg">{wedding.groom.family}</p>
            </div>
            <div>
              <p className="eyebrow mb-2 text-gold">And</p>
              <p className="font-serif text-lg">{wedding.bride.family}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="eyebrow mt-14 text-gold">Together with joy, we invite you to the wedding of</p>
          <div className="mt-6 flex flex-col items-center gap-2">
            <span className="font-display text-4xl text-maroon sm:text-5xl">{wedding.groom.name}</span>
            <span className="font-serif text-2xl italic text-gold">&amp;</span>
            <span className="font-display text-4xl text-maroon sm:text-5xl">{wedding.bride.name}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
