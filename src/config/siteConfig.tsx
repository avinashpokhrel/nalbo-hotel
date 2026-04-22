import { Wifi, Droplets, HeartPulse, GlassWater, ConciergeBell, Car, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export const siteConfig = {
  name: "Hotel Dharaney",
  contact: {
    phone: "+977-025-520000",
    address: "Dharan, Sunsari, Nepal",
    email: "hello@hoteldharaney.com",
    mapLocation: {
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109715.58947491585!2d87.20462490187712!3d26.801232930502927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef419fc7271c1d%3A0x1d1300367590c002!2sDharan!5e1!3m2!1sen!2snp!4v1776524965823!5m2!1sen!2snp"
    }
  },
  socials: [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/hoteldharaney' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/hoteldharaney' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/hoteldharaney' },
  ],
  hero: {
    tagline: "Dharan, Nepal · Est. 2020",
    title: "Where Modern Elegance Meets Nepali Soul",
    subDescription: "A sanctuary of comfort nestled in the foothills of the Himalayas, where every detail is curated for the soulful traveler.",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2000"
    ],
    carouselConfig: {
      autoplayDelay: 5000
    }
  },
  rooms: [
    {
      id: 1,
      name: 'Deluxe Room',
      area: '12.4',
      sleeps: 2,
      tag: 'Most Popular',
      price: 'NPR 4,500',
      description: 'Our Deluxe Room offers a perfect sanctuary for solo travelers or couples, featuring contemporary design and high-end amenities.',
      amenities: ['1 Double Bed', 'Free WiFi', 'Air Conditioning', 'Flat-screen TV', 'Mini Fridge', 'Rain Shower'],
      mainImage: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1631049307214-da0ec9d70304?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1631049307248-da0ec9d70304?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1631049307282-da0ec9d70304?w=800&auto=format&fit=crop'
      ]
    },
    {
      id: 2,
      name: 'Standard Deluxe',
      area: '21.6',
      sleeps: 2,
      tag: null,
      price: 'NPR 5,500',
      description: 'Space and style meet in our Standard Deluxe room, providing enhanced comfort for your stay in Dharan.',
      amenities: ['1 Double Bed', 'Free WiFi', 'City View', 'Mini Bar', 'Work Desk', 'Safe Box'],
      mainImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&auto=format&fit=crop'
      ]
    },
    {
      id: 3,
      name: 'Super Deluxe',
      area: '24.2',
      sleeps: 2,
      tag: null,
      price: 'NPR 6,800',
      description: 'The Super Deluxe category offers panoramic views and premium touches for a truly elevated experience.',
      amenities: ['1 Double Bed', 'Free WiFi', 'Balcony', 'Rain Shower', 'Coffee Maker', 'Premium Bedding'],
      mainImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&auto=format&fit=crop'
      ]
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
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop'
      ]
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
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&auto=format&fit=crop'
      ]
    },
    {
      id: 6,
      name: 'Premium Executive',
      area: '30.9',
      sleeps: 2,
      tag: 'Best Value',
      price: 'NPR 10,500',
      description: 'The pinnacle of Hotel Dharaney. Our Premium Executive suite offers unmatched luxury and personalized service.',
      amenities: ['1 King Bed', 'Living Area', 'Free WiFi', 'Butler Service', 'Custom Minibar', 'VIP Airport Transfer'],
      mainImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1631049551257-40c1fef23abc?w=800&auto=format&fit=crop'
      ]
    }
  ],
  testimonials: [
    {
      id: 1,
      name: 'Priya Sharma',
      country: 'India',
      rating: 5,
      quote: 'Hotel Dharaney exceeded every expectation. The staff felt like family, the rooms were immaculate, and the location in Dharan is perfect for exploring the foothills.'
    },
    {
      id: 2,
      name: 'James Whitfield',
      country: 'United Kingdom',
      rating: 5,
      quote: 'Rarely do you find a hotel that blends genuine luxury with authentic local warmth this seamlessly. The Executive Room with Jacuzzi was an absolute highlight.'
    },
    {
      id: 3,
      name: 'Aiko Tanaka',
      country: 'Japan',
      rating: 5,
      quote: 'The dining experience alone is worth the stay. Every meal felt curated — fresh ingredients, beautiful presentation, and service that anticipates your needs.'
    }
  ],
  facilities: [
    { id: 1, icon: Wifi,       label: 'Free WiFi',        description: 'High-speed throughout' },
    { id: 2, icon: Droplets,   label: 'Swimming Pool',    description: 'Rooftop, open daily' },
    { id: 3, icon: HeartPulse, label: 'Fitness Center',   description: 'Full equipment, 24hrs' },
    { id: 4, icon: GlassWater, label: 'Bar & Lounge',     description: 'Cocktails & spirits' },
    { id: 5, icon: ConciergeBell, label: '24hr Room Service', description: 'Any hour, any need' },
    { id: 6, icon: Car,        label: 'Free Parking',     description: 'Secure, on-premises' }
  ],
  description: "Modern elegance. Authentic warmth.",
};
