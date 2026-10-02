import { motion, type MotionValue } from 'framer-motion'
import { asset } from '../utils/asset'

interface TemplePortalProps {
  scale: MotionValue<number>
  leftX: MotionValue<string>
  rightX: MotionValue<string>
  glow: MotionValue<number>
  templeOpacity: MotionValue<number>
  reduced: boolean
}

const imgBase =
  'pointer-events-none absolute inset-0 h-full w-full select-none object-contain object-bottom'

const srcSet = `${asset('temple-640.webp')} 640w, ${asset('temple.webp')} 1024w`

/**
 * The cinematic temple. When motion is allowed it is rendered as two clipped
 * halves that part like ceremonial doors, revealing a warm glow in the centre.
 */
export function TemplePortal({ scale, leftX, rightX, glow, templeOpacity, reduced }: TemplePortalProps) {
  if (reduced) {
    return (
      <img
        src={asset('temple.webp')}
        srcSet={srcSet}
        sizes="100vw"
        alt="An illuminated Indian temple at dusk"
        fetchPriority="high"
        className={imgBase}
      />
    )
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ opacity: glow }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(255,244,214,0.95),rgba(197,168,112,0.35)_28%,rgba(104,31,45,0.12)_52%,transparent_68%)]"
      />
      <motion.div style={{ scale }} className="absolute inset-0 origin-bottom">
        <motion.img
          src={asset('temple.webp')}
          srcSet={srcSet}
          sizes="100vw"
          alt="An illuminated Indian temple at dusk"
          fetchPriority="high"
          style={{ x: leftX, opacity: templeOpacity, clipPath: 'inset(0 50% 0 0)' }}
          className={imgBase}
        />
        <motion.img
          src={asset('temple.webp')}
          srcSet={srcSet}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          style={{ x: rightX, opacity: templeOpacity, clipPath: 'inset(0 0 0 50%)' }}
          className={imgBase}
        />
      </motion.div>
    </>
  )
}
