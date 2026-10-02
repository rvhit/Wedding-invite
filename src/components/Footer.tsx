import { wedding } from '../data/weddingData'
import { Reveal } from './Reveal'
import { MotifDivider } from './MotifDivider'
import { FloralMotif } from './FloralMotif'
import { Monogram } from './Monogram'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ivory section-pad">
      <FloralMotif
        tone="text-gold"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
      />
      <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
        <Reveal>
          <Monogram className="mx-auto h-16 w-16 text-gold" />
          <MotifDivider variant="lotus" className="mt-8" />
          <p className="mt-10 font-serif text-2xl leading-relaxed text-brown/80 sm:text-3xl">
            {wedding.closingMessage}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-2">
            <span className="font-display text-4xl text-maroon sm:text-5xl">
              {wedding.groom.name} &amp; {wedding.bride.name}
            </span>
            <span className="mt-1 text-sm uppercase tracking-[0.25em] text-gold">
              {wedding.weddingDateLabel}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-14 text-xs uppercase tracking-[0.2em] text-brown/50">
            Made with love for our family &amp; friends
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
