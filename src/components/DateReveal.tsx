import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { CalendarPlus, Sparkles } from 'lucide-react'
import { wedding } from '../data/weddingData'
import { downloadICS } from '../utils/calendar'
import { Reveal } from './Reveal'
import { MotifDivider } from './MotifDivider'

function splitDate(iso: string) {
  const d = new Date(iso)
  return {
    day: d.toLocaleDateString('en-GB', { day: '2-digit' }),
    month: d.toLocaleDateString('en-GB', { month: 'long' }),
    year: d.toLocaleDateString('en-GB', { year: 'numeric' }),
    weekday: d.toLocaleDateString('en-GB', { weekday: 'long' }),
  }
}

export function DateReveal() {
  const [revealed, setRevealed] = useState(false)
  const reduce = useReducedMotion()
  const { day, month, year, weekday } = splitDate(wedding.weddingDateISO)

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
    <section
      id="date"
      aria-labelledby="date-heading"
      className="bg-ivory-deep section-pad"
    >
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <Reveal>
          <p className="eyebrow text-gold">The Day</p>
          <h2 id="date-heading" className="mt-4 font-display text-3xl text-maroon sm:text-4xl">
            Save the Date
          </h2>
          <MotifDivider variant="diya" className="mt-6" />
        </Reveal>

        <Reveal delay={0.1} className="mt-10 w-full">
          <div className="foil-frame mx-auto flex min-h-[220px] max-w-md flex-col items-center justify-center bg-ivory px-8 py-12">
            <AnimatePresence mode="wait" initial={false}>
              {!revealed ? (
                <motion.div
                  key="sealed"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-6"
                >
                  <p className="max-w-xs font-serif text-lg text-brown/70">
                    A date to remember, sealed with love.
                  </p>
                  <button
                    type="button"
                    onClick={() => setRevealed(true)}
                    className="inline-flex items-center gap-2 border border-maroon px-7 py-3 font-sans text-sm uppercase tracking-[0.2em] text-maroon transition-colors duration-300 hover:bg-maroon hover:text-ivory"
                  >
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    Reveal the Date
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="revealed"
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center"
                >
                  <span className="font-display text-6xl leading-none text-maroon sm:text-7xl">
                    {day}
                  </span>
                  <span className="mt-2 font-serif text-xl uppercase tracking-[0.35em] text-gold">
                    {month}
                  </span>
                  <span className="mt-1 font-serif text-2xl text-brown">{year}</span>
                  <span className="mt-4 text-sm uppercase tracking-[0.2em] text-brown/60">
                    {weekday} · Mark your calendar
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        {revealed && (
          <Reveal delay={0.05}>
            <button
              type="button"
              onClick={handleCalendar}
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-maroon underline-offset-4 hover:underline"
            >
              <CalendarPlus className="h-4 w-4" aria-hidden="true" />
              Add to Calendar
            </button>
          </Reveal>
        )}
      </div>
    </section>
  )
}
