interface MonogramProps {
  className?: string
}

/** A thin gold roundel bearing the couple's initials, like a stationery seal. */
export function Monogram({ className = '' }: MonogramProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '30px' }}
      >
        <tspan>R</tspan>
        <tspan dx="2" style={{ fontSize: '16px', fontStyle: 'italic' }}>&amp;</tspan>
        <tspan dx="2">S</tspan>
      </text>
    </svg>
  )
}
