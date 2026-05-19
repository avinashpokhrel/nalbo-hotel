/**
 * Edit this file → run `npm run build` → every meta tag, schema, sitemap,
 * robots.txt, and UI text updates automatically.
 */

export const seo = {

  // ── Site identity ──────────────────────────────────────────────────────────
  siteUrl:       'https://nalbohotel.com',
  name:          'Nalbo Hotel',
  tagline:       'Nalbo Hotel · Est. 2026 A.D.',
  title:         'Nalbo Hotel | Best Hotel in Dharan',
  description:   'Nalbo Hotel offers comfortable and cozy rooms in the heart of Dharan, Nepal. Enjoy 24-hour room service, free high-speed WiFi, dining hall, bar & lounge, and secure parking on Shanti Path.',
  keywords:      'Nalbo Hotel, hotel in Dharan, hotel Dharan Nepal, best hotel Dharan, Shanti path hotel Dharan, cozy hotel Nepal, rooms in Dharan, Dharan accommodation, Nepal hotel booking',
  ogImage:       '/og-image.png',
  footerTagline: "Dharan's favourite destination since 2026 A.D.",

  // ── Contact ────────────────────────────────────────────────────────────────
  contact: {
    phone:       '9803411308',
    landline:    '025-579308',
    address:     'Dharan - 2, Shanti Path',
    email:       'officialhotelnalbo@gmail.com',
    mapEmbedUrl: 'about:blank',
  },

  // ── Geographic (local SEO) ─────────────────────────────────────────────────
  geo: {
    region:    'NP-P1',
    placename: 'Shanti Path, 2, Dharan, Sunsari, Nepal',
  },

  // ── Social media ───────────────────────────────────────────────────────────
  socials: {
    instagram: 'https://www.instagram.com/nalbohotel',
    facebook:  'https://www.facebook.com/profile.php?id=61589903186912',
    tiktok:    'https://www.tiktok.com/@hotel.nalbo',
  },

  // ── Business details ───────────────────────────────────────────────────────
  foundingDate:  '2026 A.D.',

  openingHours:  'Mo-Su 00:00-23:59',
  checkinTime:   '12:00',
  checkoutTime:  '11:00',

  // ── Amenities (JSON-LD schema) ─────────────────────────────────────────────
  amenities: [
    'Free WiFi',
    'Dining Hall',
    'Bar and Lounge',
    '24-Hour Room Service',
    'Parking',
    'Air Conditioning',
  ],

  // ── Room summaries (JSON-LD containsPlace schema) ──────────────────────────
  rooms: [
    { name: 'Vip Suite',          bedType: 'King',   beds: 1, description: 'Spacious and refined suite with premium comfort. 30.9 m², sleeps 2.' },
    { name: 'Double Bed AC Room', bedType: 'Double', beds: 1, description: 'Comfortable air-conditioned room with a double bed. 22.2 m², sleeps 2.' },
    { name: 'Single Bed AC Room', bedType: 'Single', beds: 1, description: 'Cozy air-conditioned room with a single bed. 12.4 m², sleeps 2.' },
    { name: 'Non AC Room',        bedType: 'Single', beds: 1, description: 'Practical and comfortable non AC room. 18.5 m², sleeps 2.' },
  ],

} as const;
