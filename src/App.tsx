import { Hero } from './components/Hero'
import { Invitation } from './components/Invitation'
import { DateReveal } from './components/DateReveal'
import { Celebrations } from './components/Celebrations'
import { CoupleStory } from './components/CoupleStory'
import { CoupleCarousel } from './components/CoupleCarousel'
import { Countdown } from './components/Countdown'
import { ThingsToKnow } from './components/ThingsToKnow'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <a
        href="#invitation"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-maroon focus:px-4 focus:py-2 focus:text-ivory"
      >
        Skip to invitation
      </a>

      <Hero />

      <main id="invitation-main">
        <Invitation />
        <DateReveal />
        <Celebrations />
        <CoupleStory />
        <CoupleCarousel />
        <Countdown />
        <ThingsToKnow />
      </main>

      <Footer />
    </>
  )
}

export default App
