import type { SVGProps } from 'react'

const base: SVGProps<SVGSVGElement> = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

/** Lotus in bloom. */
export function Lotus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 36" className={className} {...base}>
      <path d="M28 6c-3 7-3 16 0 24 3-8 3-17 0-24Z" />
      <path d="M28 30c-4-6-11-9-18-9 2 7 9 11 18 11" />
      <path d="M28 30c4-6 11-9 18-9-2 7-9 11-18 11" />
      <path d="M28 30c-6-4-9-10-10-18 5 3 9 9 10 18" />
      <path d="M28 30c6-4 9-10 10-18-5 3-9 9-10 18" />
      <path d="M8 24c-3 1-5 3-6 6 3 0 6-1 8-4" />
      <path d="M48 24c3 1 5 3 6 6-3 0-6-1-8-4" />
    </svg>
  )
}

/** Auspicious kalash pot with coconut and mango leaves. */
export function Kalash({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 56" className={className} {...base}>
      <path d="M14 38c0 10 20 10 20 0 0-6-4-10-10-10s-10 4-10 10Z" />
      <path d="M13 29q11-5 22 0" />
      <path d="M15 32h18" />
      <path d="M20 48h8" />
      <circle cx="24" cy="21" r="5" />
      <path d="M20 19c-7-5-14-3-17 4 7 2 13 0 17-4" />
      <path d="M28 19c7-5 14-3 17 4-7 2-13 0-17-4" />
    </svg>
  )
}

/** Paisley / ambi (mango) curl. */
export function Paisley({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 48" className={className} {...base}>
      <path d="M20 4c12 2 16 14 10 24-5 8-16 10-22 4 8 3 16-1 18-9 2-7-2-13-9-15-6-2-11 2-11 8 0 4 3 7 7 7" />
      <path d="M20 16c4 1 6 5 4 9-1 3-4 4-7 3" />
      <circle cx="18" cy="23" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Lit diya (oil lamp). */
export function Diya({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 40" className={className} {...base}>
      <path d="M8 26c3 6 29 6 32 0 0 0-4-2-16-2S8 26 8 26Z" />
      <path d="M6 26c2 5 34 5 36 0" />
      <path d="M24 24c2-3 1-6-1-8 3 1 5 4 5 7" />
      <path d="M24 8c2 4 6 6 6 11a6 6 0 0 1-12 0c0-3 3-5 6-11Z" />
    </svg>
  )
}

export type MotifName = 'lotus' | 'kalash' | 'paisley' | 'diya'

export const Motif: Record<MotifName, (p: { className?: string }) => JSX.Element> = {
  lotus: Lotus,
  kalash: Kalash,
  paisley: Paisley,
  diya: Diya,
}
