import { useEffect, useState } from 'react'

export interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isPast: boolean
}

function diff(target: number): TimeLeft {
  const now = Date.now()
  const delta = target - now
  if (delta <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
  }
  const seconds = Math.floor(delta / 1000)
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
    isPast: false,
  }
}

/** Live countdown to an ISO date string, updating once per second. */
export function useCountdown(targetISO: string): TimeLeft {
  const target = new Date(targetISO).getTime()
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => diff(target))

  useEffect(() => {
    const id = window.setInterval(() => setTimeLeft(diff(target)), 1000)
    return () => window.clearInterval(id)
  }, [target])

  return timeLeft
}
