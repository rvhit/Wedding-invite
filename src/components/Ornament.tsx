interface OrnamentProps {
  className?: string
  /** Tailwind text color class controlling the stroke colour. */
  tone?: string
}

/** A slim gold flourish used as a section divider, like foil on stationery. */
export function Ornament({ className = '', tone = 'text-gold' }: OrnamentProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${tone} ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-current opacity-50" />
      <svg width="46" height="16" viewBox="0 0 46 16" fill="none" className="opacity-90">
        <path
          d="M23 2c3 3 3 9 0 12-3-3-3-9 0-12Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path d="M23 8H6M23 8h17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="4" cy="8" r="1.4" fill="currentColor" />
        <circle cx="42" cy="8" r="1.4" fill="currentColor" />
      </svg>
      <span className="h-px w-10 bg-current opacity-50" />
    </div>
  )
}
