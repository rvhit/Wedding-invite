// =============================================================================
// Single source of truth for all wedding details.
// Edit everything here — components read from this file only.
// =============================================================================

import { asset } from '../utils/asset'

export interface WeddingEvent {
  id: string
  name: string
  /** ISO date string, e.g. "2026-12-01". Used for ordering and display. */
  date: string
  /** Human-friendly day label, e.g. "Tuesday". */
  day: string
  time: string
  venue: string
  address: string
  /** Full Google Maps URL for the "View Location" action. */
  mapUrl: string
  /** One-line poetic description of the function. */
  note: string
}

export interface GalleryImage {
  src: string
  alt: string
}

export interface StoryChapter {
  title: string
  body: string
}

export interface WeddingData {
  groom: {
    name: string
    family: string
  }
  bride: {
    name: string
    family: string
  }
  hashtag: string
  /** Primary wedding date in ISO form — drives countdown, calendar and reveal. */
  weddingDateISO: string
  /** Display-friendly date, e.g. "03 December 2026". */
  weddingDateLabel: string
  blessing: string
  sanskritBlessing: string
  events: WeddingEvent[]
  mainVenue: {
    name: string
    address: string
    mapUrl: string
  }
  dressCode: string
  accommodation: string
  story: {
    intro: string
    chapters: StoryChapter[]
  }
  gallery: GalleryImage[]
  closingMessage: string
}

export const wedding: WeddingData = {
  groom: {
    name: 'Rahul',
    family: 'Son of Mr. [Groom Father] & Mrs. [Groom Mother]',
  },
  bride: {
    name: 'Sravani',
    family: 'Daughter of Mr. [Bride Father] & Mrs. [Bride Mother]',
  },
  hashtag: '#RahulWedsSravani',
  weddingDateISO: '2026-12-03T18:00:00+05:30',
  weddingDateLabel: '03 December 2026',

  sanskritBlessing: 'श्री गणेशाय नमः',
  blessing:
    'With the blessings of our families, we invite you to celebrate the beginning of a beautiful new chapter.',

  events: [
    {
      id: 'mehndi',
      name: 'Mehndi',
      date: '2026-12-01',
      day: 'Tuesday',
      time: '4:00 PM onwards',
      venue: '[Mehndi Venue]',
      address: '[Mehndi venue address]',
      mapUrl: 'https://maps.google.com/?q=Mehndi+Venue',
      note: 'An afternoon of henna, colour and quiet laughter.',
    },
    {
      id: 'haldi',
      name: 'Haldi',
      date: '2026-12-02',
      day: 'Wednesday',
      time: '10:00 AM onwards',
      venue: '[Haldi Venue]',
      address: '[Haldi venue address]',
      mapUrl: 'https://maps.google.com/?q=Haldi+Venue',
      note: 'Turmeric, sunlight and the warmth of family.',
    },
    {
      id: 'sangeet',
      name: 'Sangeet Night',
      date: '2026-12-02',
      day: 'Wednesday',
      time: '7:30 PM onwards',
      venue: '[Sangeet Venue]',
      address: '[Sangeet venue address]',
      mapUrl: 'https://maps.google.com/?q=Sangeet+Venue',
      note: 'A night of music, dance and celebration.',
    },
    {
      id: 'wedding',
      name: 'The Wedding',
      date: '2026-12-03',
      day: 'Thursday',
      time: '6:00 PM onwards',
      venue: '[Wedding Venue]',
      address: '[Wedding venue address]',
      mapUrl: 'https://maps.google.com/?q=Wedding+Venue',
      note: 'The sacred vows, beneath a canopy of flowers.',
    },
    {
      id: 'reception',
      name: 'Reception',
      date: '2026-12-04',
      day: 'Friday',
      time: '7:00 PM onwards',
      venue: '[Reception Venue]',
      address: '[Reception venue address]',
      mapUrl: 'https://maps.google.com/?q=Reception+Venue',
      note: 'An evening to share joy with those we love.',
    },
  ],

  mainVenue: {
    name: '[Wedding Venue]',
    address: '[Full venue address, City, State]',
    mapUrl: 'https://maps.google.com/?q=Wedding+Venue',
  },
  dressCode: 'Traditional Indian attire in festive hues. Soft golds, deep reds and ivory.',
  accommodation:
    'Rooms have been arranged for outstation guests nearby. Please reach out to the family for details.',

  story: {
    intro: 'Two hearts. One beautiful beginning.',
    chapters: [
      {
        title: 'How they met',
        body: 'What began as an ordinary introduction grew, over unhurried conversations, into something neither of them expected and both quietly hoped for.',
      },
      {
        title: 'The proposal',
        body: 'On a quiet evening, surrounded by nothing but the two of them, a simple question turned a friendship into forever.',
      },
      {
        title: 'The beginning of forever',
        body: 'Now, with the blessings of their families, they step together into a lifetime of shared mornings, little joys and unwavering love.',
      },
    ],
  },

  // Placeholder gallery — swap `src` with your own photos in /public.
  gallery: [
    { src: asset('temple.webp'), alt: 'A portrait of the couple' },
    { src: asset('temple.webp'), alt: 'The couple together' },
    { src: asset('temple.webp'), alt: 'A candid moment' },
    { src: asset('temple.webp'), alt: 'A cherished memory' },
  ],

  closingMessage: 'With love, we cannot wait to celebrate with you.',
}
