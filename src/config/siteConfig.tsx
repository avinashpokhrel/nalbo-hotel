import { Wifi, HeartPulse, GlassWater, ConciergeBell, Utensils, Car, Instagram, Facebook } from 'lucide-react';
import hero1 from '@/assets/hero/1.png';
import hero2 from '@/assets/hero/2.png';
import hero3 from '@/assets/hero/3.png';
import hero4 from '@/assets/hero/4.png';
import { seo } from './seo';

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
  // ── Shared with seo.ts ─────────────────────────────────────────────────────
  name:        seo.name,
  description: seo.footerTagline,

  contact: {
    phone:   seo.contact.phone,
    address: seo.contact.address,
    email:   seo.contact.email,
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
    subDescription: 'Nalbo Hotel offers comfortable and cozy rooms at affordable prices in the heart of Dharan.',
    images: [hero1, hero2, hero3, hero4],
    carouselConfig: {
      autoplayDelay: 5000,
    },
  },

  // ── Rooms (full app data — images, gallery, UI tags, etc.) ────────────────
  rooms: [
    {
      id: 1,
      name: 'Deluxe Room',
      area: '12.4',
      sleeps: 2,
      tag: 'Best Value',
      price: 'Affordable Pricing',
      description: 'Our Deluxe Room offers a comfortable and cozy sanctuary, perfectly blending modern amenities with local charm.',
      amenities: ['1 Double Bed', 'Free WiFi', '24h Room Service', 'Flat-screen TV', 'Parking Available'],
      mainImage: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1631049307214-da0ec9d70304?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1631049307248-da0ec9d70304?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1631049307282-da0ec9d70304?w=800&auto=format&fit=crop',
      ],
    },
    {
      id: 2,
      name: 'Standard Room',
      area: '18.5',
      sleeps: 2,
      tag: null,
      price: 'Comfortable Choice',
      description: 'Our Standard Room provides all the essential comforts for a restful stay, with a focus on coziness and value.',
      amenities: ['1 Double Bed', 'Free WiFi', 'City View', '24h Room Service', 'Work Desk', 'Safe Box'],
      mainImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&auto=format&fit=crop',
      ],
    },
    {
      id: 3,
      name: 'Cozy Suite',
      area: '22.2',
      sleeps: 2,
      tag: 'Cozy Pick',
      price: 'Premium Comfort',
      description: 'The Cozy Suite offers a touch more space and refinement for those who appreciate the finer details of hospitality.',
      amenities: ['1 Queen Bed', 'Free WiFi', 'Balcony', 'Room Service', 'Coffee Maker', 'Premium Bedding'],
      mainImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&auto=format&fit=crop',
      ],
    },
    {
      id: 4,
      name: 'Executive Room',
      area: '30.9',
      sleeps: 2,
      tag: 'With Jacuzzi',
      price: 'NPR 8,500',
      description: 'Indulge in the ultimate luxury with our Executive Room, featuring its own private Jacuzzi for your relaxation.',
      amenities: ['1 King Bed', 'Jacuzzi', 'Free WiFi', 'Lounge Access', 'Personal Butler', 'Luxury Toiletries'],
      mainImage: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop',
      ],
    },
    {
      id: 5,
      name: 'Premium Deluxe',
      area: '30.8',
      sleeps: 3,
      tag: 'With Jacuzzi',
      price: 'NPR 9,200',
      description: 'Ideal for small families or groups, our Premium Deluxe room combines space, style, and luxury.',
      amenities: ['2 King Beds', 'Jacuzzi', 'Free WiFi', 'Panoramic View', 'Breakfast Included', 'Evening Turn Down'],
      mainImage: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&auto=format&fit=crop',
      ],
    },
    {
      id: 6,
      name: 'Premium Executive',
      area: '30.9',
      sleeps: 2,
      tag: 'Best Value',
      price: 'NPR 10,500',
      description: 'Our Premium Executive suite offers unmatched comfort and personalized service.',
      amenities: ['1 King Bed', 'Living Area', 'Free WiFi', 'Butler Service', 'Custom Minibar', 'VIP Airport Transfer'],
      mainImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1631049551257-40c1fef23abc?w=800&auto=format&fit=crop',
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
