import { Wifi, HeartPulse, GlassWater, ConciergeBell, Utensils, Car, Instagram, Facebook } from 'lucide-react';

import { seo } from './seo';
import hero_image from '@assets/hero.webp';
import roomDouble1 from '@assets/rooms/double_bed_ac_room/1.webp';
import roomDouble2 from '@assets/rooms/double_bed_ac_room/2.webp';
import roomNonAc1 from '@assets/rooms/non_ac_room/1.webp';
import roomNonAc2 from '@assets/rooms/non_ac_room/2.webp';
import roomNonAc3 from '@assets/rooms/non_ac_room/3.webp';
import roomSingle1 from '@assets/rooms/single_bed_ac_room/1.webp';
import roomSingle2 from '@assets/rooms/single_bed_ac_room/2.webp';
import roomVip1 from '@assets/rooms/vip_suite/1.webp';
import roomVip2 from '@assets/rooms/vip_suite/2.webp';

// ── Custom TikTok icon (not in Lucide) ────────────────────────────────────────
const TiktokIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a8.13 8.13 0 0 1-1.89-1.44c-.01.41-.01.81-.01 1.22 0 2.24.01 4.48-.01 6.72-.11 3.27-2.22 6.43-5.3 7.55a8.31 8.31 0 0 1-8.54-1.95 8.16 8.16 0 0 1-2.29-6.32 8.14 8.14 0 0 1 4.75-7.46 8.1 8.1 0 0 1 5.27-.47v4.06a4.1 4.1 0 0 0-2.31 1.29c-.83.89-1.18 2.1-1.03 3.3.1 1.48 1.1 2.87 2.5 3.32a4.11 4.11 0 0 0 4.88-1.74c.48-.82.68-1.77.67-2.71V.02Z" />
  </svg>
);

export const siteConfig = {
  name:        seo.name,
  description: seo.footerTagline,
  developerName: seo.developerName,
  developerUrl: seo.developerUrl,

  contact: {
    phone:    seo.contact.phone,
    landline: seo.contact.landline,
    address:  seo.contact.address,
    email:    seo.contact.email,
    mapLocation: {
      embedUrl: seo.contact.mapEmbedUrl,
    },
  },

  socials: [
    { name: 'Instagram', icon: Instagram,  url: seo.socials.instagram },
    { name: 'Facebook',  icon: Facebook,   url: seo.socials.facebook  },
    { name: 'TikTok',    icon: TiktokIcon, url: seo.socials.tiktok    },
  ],

  // ── Hero (display text lives here; SEO title/description lives in seo.ts) ──
  hero: {
    tagline:        seo.tagline,
    title:          'The Go-To Hotel for a Stay in Dharan',
    subDescription: 'Experience the difference with our professional hospitality services; Where inspired design and intelligent functionality combine to create hotel spaces that delight every guest.',
    images: [hero_image],
    carouselConfig: {
      autoplayDelay: 5000,
    },
  },

  // ── Rooms (full app data — images, gallery, UI tags, etc.) ────────────────
  rooms: [
    {
      id: 1,
      name: 'Vip Suite',

      tag: 'Premium',
      description: 'Our Vip Suite offers a spacious and refined stay experience with elevated comfort and service.',
      amenities: ['1 King Bed', 'Air Conditioning', 'Free WiFi', '24h Room Service', 'Premium Interior'],
      mainImage: roomVip1,
      gallery: [
        roomVip1,
        roomVip2,
      ],
    },
    {
      id: 2,
      name: 'Double Bed AC Room',

      tag: 'AC Room',
      description: 'A comfortable room with a double bed and air conditioning, ideal for a relaxing stay in Dharan.',
      amenities: ['1 Double Bed', 'Air Conditioning', 'Free WiFi', '24h Room Service'],
      mainImage: roomDouble1,
      gallery: [
        roomDouble1,
        roomDouble2,
      ],
    },
    {
      id: 3,
      name: 'Single Bed AC Room',

      tag: 'AC Room',
      description: 'A cozy single bed AC room designed for guests looking for comfort and convenience.',
      amenities: ['1 Single Bed', 'Air Conditioning', 'Free WiFi', '24h Room Service'],
      mainImage: roomSingle1,
      gallery: [
        roomSingle1,
        roomSingle2,
      ],
    },
    {
      id: 4,
      name: 'Non AC Room',

      tag: null,
      description: 'A practical and comfortable non AC room for guests who prefer a simple stay experience.',
      amenities: ['1 Bed', 'Fan', 'Free WiFi', '24h Room Service'],
      mainImage: roomNonAc1,
      gallery: [
        roomNonAc1,
        roomNonAc2,
        roomNonAc3,
      ],
    },
  ],

  // ── Testimonials ────────────────────────────────────────────────────────────
  testimonials: [
    {
      id: 1,
      name: 'Priya Sharma',
      country: 'India',
      rating: 5,
      quote: 'Nalbo Hotel exceeded every expectation. The staff felt like family, the rooms were cozy, and the location in Dharan is perfect.',
    },
    {
      id: 2,
      name: 'James Whitfield',
      country: 'United Kingdom',
      rating: 5,
      quote: 'Rarely do you find a hotel that blends genuine luxury with authentic local warmth this seamlessly. The Executive Room with Jacuzzi was an absolute highlight.',
    },
    {
      id: 3,
      name: 'Aiko Tanaka',
      country: 'Japan',
      rating: 5,
      quote: 'The dining experience alone is worth the stay. Every meal felt curated — fresh ingredients, beautiful presentation, and service that anticipates your needs.',
    },
  ],

  // ── Facilities (icon components live here, not in seo.ts) ─────────────────
  facilities: [
    { id: 3, icon: HeartPulse,    label: 'Secure Stay',         description: 'Peace of mind guaranteed' },
    { id: 1, icon: Wifi,          label: 'Free WiFi',           description: 'High-speed throughout'    },
    { id: 2, icon: Utensils,      label: 'Dining Hall',         description: 'Perfect for meetings'     },
    { id: 4, icon: GlassWater,    label: 'Bar & Lounge',        description: 'Cocktails & spirits'      },
    { id: 5, icon: ConciergeBell, label: '24hr Room Service',   description: 'Any hour, any need'       },
    { id: 6, icon: Car,           label: 'Parking',             description: 'Secure, on-premises'      },
  ],
};
