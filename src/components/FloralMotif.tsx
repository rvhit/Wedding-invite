interface FloralMotifProps {
  className?: string
  tone?: string
}

/** A subtle symmetric floral mandala used as restrained Indian ornamentation. */
export function FloralMotif({ className = '', tone = 'text-gold' }: FloralMotifProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={`${tone} ${className}`}
    >
      <g stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
        <circle cx="100" cy="100" r="6" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8
          return (
            <g key={i} transform={`rotate(${angle} 100 100)`}>
              {/* petal */}
              <path d="M100 94c7 -14 7 -30 0 -44 -7 14 -7 30 0 44Z" />
              {/* inner bud */}
              <path d="M100 70c3 -6 3 -12 0 -18 -3 6 -3 12 0 18Z" />
              {/* tip dot */}
              <circle cx="100" cy="46" r="1.6" fill="currentColor" stroke="none" />
            </g>
          )
        })}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8 + 22.5
          return (
            <g key={`s-${i}`} transform={`rotate(${angle} 100 100)`}>
              <path d="M100 88c2 -8 2 -16 0 -24 -2 8 -2 16 0 24Z" opacity="0.7" />
            </g>
          )
        })}
      </g>
    </svg>
  )
}
