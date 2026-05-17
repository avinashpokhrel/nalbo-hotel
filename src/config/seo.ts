/**
 * Edit this file → run `npm run build` → every meta tag, schema, sitemap,
 * robots.txt, and UI text updates automatically.
 */

export const seo = {

  // ── Site identity ──────────────────────────────────────────────────────────
  siteUrl:       'https://nalbohotel.com',
  name:          'Nalbo Hotel',
  tagline:       'Nalbo Hotel · Est. 2026',
  title:         'Nalbo Hotel | Best Hotel in Dharan, Nepal',
  description:   'Nalbo Hotel offers comfortable and cozy rooms at affordable prices in the heart of Dharan, Nepal. Enjoy 24-hour room service, free high-speed WiFi, dining hall, bar & lounge, Jacuzzi rooms, and secure parking on Shanti Path.',
  keywords:      'Nalbo Hotel, hotel in Dharan, hotel Dharan Nepal, best hotel Dharan, affordable hotel Dharan, Shanti path hotel Dharan, cozy hotel Nepal, rooms in Dharan, jacuzzi room Dharan, Dharan accommodation, Nepal hotel booking',
  ogImage:       '/og-image.jpg',
  footerTagline: "Dharan's favourite destination since 2026.",

  // ── Contact ────────────────────────────────────────────────────────────────
  contact: {
    phone:       '+977 9862215263',
    address:     'Dharan, Shanti Path',
    email:       'officialhotelnalbo@gmail.com',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109715.58947491585!2d87.20462490187712!3d26.801232930502927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef419fc7271c1d%3A0x1d1300367590c002!2sDharan!5e1!3m2!1sen!2snp!4v1776524965823!5m2!1sen!2snp',
  },

  // ── Geographic (local SEO) ─────────────────────────────────────────────────
  geo: {
    region:    'NP-P1',
    placename: 'Dharan, Sunsari, Nepal',
    lat:       '26.8076',
    lng:       '87.2840',
  },

  // ── Social media ───────────────────────────────────────────────────────────
  socials: {
    instagram: 'https://www.instagram.com/nalbohotel',
    facebook:  'https://www.facebook.com/profile.php?id=61589903186912',
    tiktok:    'https://www.tiktok.com/@hotel.nalbo',
  },

  // ── Business details ───────────────────────────────────────────────────────
  foundingDate:  '2026',
  priceRange:    'NPR 8500 – NPR 10500',
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
    'Jacuzzi',
    'Air Conditioning',
    'Flat-screen TV',
  ],

  // ── Room summaries (JSON-LD containsPlace schema) ──────────────────────────
  rooms: [
    { name: 'Deluxe Room',       bedType: 'Double', beds: 1, description: 'Comfortable and cozy sanctuary blending modern amenities with local charm. 12.4 m², sleeps 2.' },
    { name: 'Standard Room',     bedType: 'Double', beds: 1, description: 'All the essential comforts for a restful stay with a city view. 18.5 m², sleeps 2.' },
    { name: 'Cozy Suite',        bedType: 'Queen',  beds: 1, description: 'Extra space and refinement with balcony and premium bedding. 22.2 m², sleeps 2.' },
    { name: 'Executive Room',    bedType: 'King',   beds: 1, description: 'Ultimate luxury with private Jacuzzi. 30.9 m², sleeps 2. NPR 8,500 / night.' },
    { name: 'Premium Deluxe',    bedType: 'King',   beds: 2, description: 'Ideal for families — panoramic view, Jacuzzi, breakfast included. 30.8 m², sleeps 3. NPR 9,200 / night.' },
    { name: 'Premium Executive', bedType: 'King',   beds: 1, description: 'Unmatched comfort with butler service and living area. 30.9 m², sleeps 2. NPR 10,500 / night.' },
  ],

} as const;
