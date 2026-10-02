import { Flower2, Sun, Music4, Heart, Wine, type LucideIcon } from 'lucide-react'
import { wedding } from '../data/weddingData'
import { EventCard } from './EventCard'
import { Reveal } from './Reveal'
import { MotifDivider } from './MotifDivider'
import { Torana } from './Torana'

const iconById: Record<string, LucideIcon> = {
  mehndi: Flower2,
  haldi: Sun,
  sangeet: Music4,
  wedding: Heart,
  reception: Wine,
}

export function Celebrations() {
  return (
    <section
      id="celebrations"
      aria-labelledby="celebrations-heading"
      className="relative bg-maroon text-ivory section-pad"
    >
      <Torana className="absolute inset-x-0 top-0 opacity-80" />
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="eyebrow text-gold-soft">The Celebrations</p>
          <h2
            id="celebrations-heading"
            className="mt-4 font-display text-4xl text-ivory sm:text-5xl"
          >
            A few beautiful days.
            <span className="mt-1 block font-serif text-2xl italic text-gold-soft sm:text-3xl">
              A lifetime of memories.
            </span>
          </h2>
          <MotifDivider variant="kalash" className="mt-8" tone="text-gold-soft" />
        </Reveal>

        <ol className="mt-16 flex flex-col gap-10 sm:gap-12">
          {wedding.events.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              Icon={iconById[event.id] ?? Heart}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}
