import { wedding } from '../data/weddingData'
import { useCountdown } from '../hooks/useCountdown'
import { Reveal } from './Reveal'
import { MotifDivider } from './MotifDivider'

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-5xl tabular-nums text-ivory sm:text-6xl lg:text-7xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-2 text-xs uppercase tracking-[0.3em] text-gold-soft sm:text-sm">
        {label}
      </span>
    </div>
  )
}

export function Countdown() {
  const { days, hours, minutes, seconds, isPast } = useCountdown(wedding.weddingDateISO)

  return (
    <section
      id="countdown"
      aria-labelledby="countdown-heading"
      className="bg-maroon-deep text-ivory section-pad"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow text-gold-soft">Counting the days</p>
          <h2 id="countdown-heading" className="sr-only">
            Countdown to the wedding
          </h2>
          <MotifDivider variant="diya" className="mt-6" tone="text-gold-soft" />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          {isPast ? (
            <p className="font-display text-4xl text-ivory sm:text-5xl">Today, forever begins.</p>
          ) : (
            <div className="flex items-start justify-center gap-6 sm:gap-12">
              <Unit value={days} label="Days" />
              <Unit value={hours} label="Hours" />
              <Unit value={minutes} label="Minutes" />
              <Unit value={seconds} label="Seconds" />
            </div>
          )}
        </Reveal>

        {!isPast && (
          <Reveal delay={0.15}>
            <p className="mt-12 font-serif text-xl italic text-gold-soft">
              until we say forever — {wedding.weddingDateLabel}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
