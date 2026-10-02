import { MapPin, Shirt, BedDouble, CalendarPlus, type LucideIcon } from 'lucide-react'
import { wedding } from '../data/weddingData'
import { downloadICS } from '../utils/calendar'
import { Reveal } from './Reveal'
import { MotifDivider } from './MotifDivider'

interface InfoProps {
  Icon: LucideIcon
  title: string
  children: React.ReactNode
}

function InfoBlock({ Icon, title, children }: InfoProps) {
  return (
    <div className="flex flex-col items-center border border-gold/40 bg-ivory px-7 py-9 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-gold">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-xl text-maroon">{title}</h3>
      <div className="mt-3 font-sans text-base leading-relaxed text-brown/80">{children}</div>
    </div>
  )
}

export function ThingsToKnow() {
  const handleCalendar = () => {
    downloadICS(
      {
        title: `${wedding.groom.name} & ${wedding.bride.name} — Wedding`,
        description: wedding.blessing,
        location: wedding.mainVenue.name,
        startISO: wedding.weddingDateISO,
      },
      'rahul-sravani-wedding.ics',
    )
  }

  return (
    <section id="info" aria-labelledby="info-heading" className="bg-ivory-deep section-pad">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="eyebrow text-gold">Things to Know</p>
          <h2 id="info-heading" className="mt-4 font-display text-4xl text-maroon sm:text-5xl">
            A little guide for the day.
          </h2>
          <MotifDivider variant="kalash" className="mt-8" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <InfoBlock Icon={MapPin} title="Venue">
              <p className="font-serif text-lg text-maroon">{wedding.mainVenue.name}</p>
              <p className="mt-1">{wedding.mainVenue.address}</p>
              <a
                href={wedding.mainVenue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-sm uppercase tracking-[0.18em] text-maroon underline-offset-4 hover:underline"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                View on Maps
              </a>
            </InfoBlock>
          </Reveal>

          <Reveal delay={0.06}>
            <InfoBlock Icon={Shirt} title="Dress Code">
              <p>{wedding.dressCode}</p>
            </InfoBlock>
          </Reveal>

          <Reveal delay={0.12}>
            <InfoBlock Icon={BedDouble} title="Accommodation">
              <p>{wedding.accommodation}</p>
            </InfoBlock>
          </Reveal>

          <Reveal delay={0.18}>
            <InfoBlock Icon={CalendarPlus} title="Reminder">
              <p>Add the celebration to your calendar so you never miss a moment.</p>
              <button
                type="button"
                onClick={handleCalendar}
                className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-sm uppercase tracking-[0.18em] text-maroon underline-offset-4 hover:underline"
              >
                <CalendarPlus className="h-4 w-4" aria-hidden="true" />
                Add to Calendar
              </button>
            </InfoBlock>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
