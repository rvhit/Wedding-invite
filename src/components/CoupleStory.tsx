import { wedding } from '../data/weddingData'
import { Reveal } from './Reveal'
import { MotifDivider } from './MotifDivider'

export function CoupleStory() {
  return (
    <section id="story" aria-labelledby="story-heading" className="bg-ivory section-pad">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="eyebrow text-gold">Our Story</p>
          <h2 id="story-heading" className="mt-4 font-display text-4xl text-maroon sm:text-5xl">
            {wedding.story.intro}
          </h2>
          <MotifDivider variant="paisley" className="mt-8" />
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal as="figure" className="order-1">
            <div className="foil-frame overflow-hidden">
              <img
                src={wedding.gallery[0]?.src}
                alt={wedding.gallery[0]?.alt ?? 'The couple'}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>

          <ol className="order-2 flex flex-col gap-10">
            {wedding.story.chapters.map((chapter, i) => (
              <Reveal as="li" key={chapter.title} delay={0.08 * i}>
                <p className="eyebrow text-gold">{`0${i + 1}`}</p>
                <h3 className="mt-2 font-display text-2xl text-maroon sm:text-3xl">
                  {chapter.title}
                </h3>
                <p className="mt-3 font-sans text-base leading-relaxed text-brown/80">
                  {chapter.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
