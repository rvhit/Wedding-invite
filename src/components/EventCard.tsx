import { MapPin, type LucideIcon } from 'lucide-react'
import type { WeddingEvent } from '../data/weddingData'
import { Reveal } from './Reveal'

interface EventCardProps {
  event: WeddingEvent
  Icon: LucideIcon
  index: number
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function EventCard({ event, Icon, index }: EventCardProps) {
  // Alternate alignment on desktop for an editorial, staggered programme.
  const flip = index % 2 === 1

  return (
    <Reveal
      as="li"
      delay={0.05 * index}
      className={`relative w-full sm:w-[88%] ${flip ? 'sm:ml-auto' : 'sm:mr-auto'}`}
    >
      <article className="group relative border border-gold/40 bg-maroon-deep/40 px-7 py-8 sm:px-10 sm:py-10">
        {/* Decorative corner ticks */}
        <span className="pointer-events-none absolute left-2 top-2 h-4 w-4 border-l border-t border-gold/60" />
        <span className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 border-b border-r border-gold/60" />

        <div className="flex items-start gap-5">
          <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>

          <div className="flex-1">
            <h3 className="font-display text-2xl text-ivory sm:text-3xl">{event.name}</h3>
            <p className="mt-1 font-serif text-base italic text-gold-soft">{event.note}</p>

            <dl className="mt-5 grid gap-x-8 gap-y-2 text-ivory/85 sm:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-gold/80">When</dt>
                <dd className="font-serif text-lg">
                  {formatDate(event.date)}
                  <span className="mt-0.5 block text-sm text-ivory/70">{event.time}</span>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-gold/80">Where</dt>
                <dd className="font-serif text-lg">
                  {event.venue}
                  <span className="mt-0.5 block text-sm text-ivory/70">{event.address}</span>
                </dd>
              </div>
            </dl>

            <a
              href={event.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-gold-soft underline-offset-4 transition-colors hover:text-ivory hover:underline"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              View Location
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
