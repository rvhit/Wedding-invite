// Generates an .ics calendar file entirely in the browser — no backend.

interface CalendarEventInput {
  title: string
  description?: string
  location?: string
  /** ISO start date-time. */
  startISO: string
  /** Duration in hours (defaults to 4). */
  durationHours?: number
}

function toICSDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

function escapeICS(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n')
}

export function buildICS({
  title,
  description = '',
  location = '',
  startISO,
  durationHours = 4,
}: CalendarEventInput): string {
  const start = new Date(startISO)
  const end = new Date(start.getTime() + durationHours * 3600 * 1000)
  const uid = `${start.getTime()}-${Math.random().toString(36).slice(2)}@wedding`

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${toICSDate(new Date())}`,
    `DTSTART:${toICSDate(start)}`,
    `DTEND:${toICSDate(end)}`,
    `SUMMARY:${escapeICS(title)}`,
    `DESCRIPTION:${escapeICS(description)}`,
    `LOCATION:${escapeICS(location)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
}

/** Triggers a client-side download of an .ics file. */
export function downloadICS(input: CalendarEventInput, filename = 'wedding.ics'): void {
  const blob = new Blob([buildICS(input)], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
