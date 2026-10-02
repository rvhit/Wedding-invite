import { Motif, type MotifName } from './motifs'

interface MotifDividerProps {
  variant?: MotifName
  className?: string
  /** Tailwind text color class controlling stroke colour. */
  tone?: string
}

/** A section divider carrying a single Indian line motif, flanked by hairlines. */
export function MotifDivider({ variant = 'lotus', className = '', tone = 'text-gold' }: MotifDividerProps) {
  const Glyph = Motif[variant]
  return (
    <div className={`flex items-center justify-center gap-4 ${tone} ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-current opacity-50" />
      <Glyph className="h-7 w-auto opacity-90" />
      <span className="h-px w-12 bg-current opacity-50" />
    </div>
  )
}
