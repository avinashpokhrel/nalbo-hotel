# Copilot Instructions — Hotel Dharaney

> **Purpose**: This document provides AI assistants with full context to work effectively on the Hotel Dharaney codebase.

---

## 📋 Project Overview

**Hotel Dharaney** is a modern, single-page marketing website for a luxury hotel located in Dharan, Nepal. The site showcases rooms, amenities, dining, testimonials, and contact information with a premium, elegant design aesthetic.

### Key Features
- Full-screen hero with image carousel
- Room listings with modal detail view
- Animated scroll-based content reveal
- Testimonials carousel
- Contact section with embedded Google Map
- Responsive design (mobile-first approach)
- Newsletter subscription form

---

## 🛠 Tech Stack

| Category       | Technology                                           |
|----------------|------------------------------------------------------|
| **Framework**  | React 19 with TypeScript                             |
| **Build Tool** | Vite 6                                               |
| **Styling**    | Tailwind CSS v4 (via `@tailwindcss/vite` plugin)     |
| **Animations** | Motion (formerly Framer Motion) — `motion/react`     |
| **Carousels**  | Swiper.js                                            |
| **Icons**      | Lucide React                                         |
| **Utilities**  | clsx, react-countup, react-intersection-observer    |

### Important Notes
- This project uses **Tailwind CSS v4** with the new `@theme` directive syntax in CSS (not `tailwind.config.js`)
- Animations use the new `motion/react` import path (not `framer-motion`)
- TypeScript is configured with `moduleResolution: "bundler"`

---

## 📁 Project Structure

```
hotel-dharaney/
├── src/
│   ├── components/         # React UI components
│   │   ├── About.tsx       # Heritage section with stats
│   │   ├── ContactBanner.tsx # Contact info + Google Map
│   │   ├── Dining.tsx      # Restaurant, bar, room service
│   │   ├── Facilities.tsx  # Icon grid of amenities
│   │   ├── Footer.tsx      # Site footer with newsletter
│   │   ├── Hero.tsx        # Full-screen hero carousel
│   │   ├── Navbar.tsx      # Sticky nav with mobile menu
│   │   ├── Recreation.tsx  # Wellness & leisure features
│   │   ├── Rooms.tsx       # Room grid + detail modal
│   │   └── Testimonials.tsx # Guest reviews carousel
│   │
│   ├── config/
│   │   └── siteConfig.tsx  # Centralized site data & content
│   │
│   ├── hooks/
│   │   └── useScrollAnimation.ts  # Intersection observer hook
│   │
│   ├── animations.ts       # Reusable Motion variants
│   ├── App.tsx             # Root component (section composition)
│   ├── index.css           # Global styles + Tailwind theme
│   └── main.tsx            # React entry point
│
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration with aliases
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

---

## 🎨 Design System

### Color Palette (defined in `src/index.css`)

| Token       | Hex       | Usage                              |
|-------------|-----------|------------------------------------|
| `ivory`     | `#F7F3ED` | Primary background                 |
| `cream`     | `#FDFAF6` | Card backgrounds, light sections   |
| `charcoal`  | `#1C1A17` | Primary text, dark overlays        |
| `mocha`     | `#6B5F52` | Secondary text, muted content      |
| `gold`      | `#C9A84C` | Accent, CTAs, highlights           |
| `sage`      | `#7D9B76` | Tertiary accent (hover states)     |
| `espresso`  | `#2B2318` | Dark sections (footer, recreation) |

### Typography

| Token        | Font Family           | Usage                    |
|--------------|-----------------------|--------------------------|
| `font-display` | Cormorant Garamond    | Headings (italic, light) |
| `font-body`   | DM Sans               | Body text, UI elements   |

### Spacing & Sizing Conventions
- Sections: `py-24` or `py-24 lg:py-32`
- Max container width: `max-w-7xl mx-auto px-6`
- Border radius: `rounded-2xl` (cards), `rounded-full` (buttons/badges)
- Button padding: `px-10 py-4` or `px-6 py-2.5`

---

## 🔧 Path Aliases

The project uses a `@/` alias pointing to `src/`:

```typescript
// ✅ Correct
import { siteConfig } from '@/config/siteConfig';
import { fadeUp } from '@/animations';

// ❌ Avoid relative paths from nested directories
import { siteConfig } from '../../config/siteConfig';
```

Configured in both `tsconfig.json` and `vite.config.ts`.

---

## 📐 Component Patterns

### Section Component Structure

Each section follows this pattern:

```tsx
import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/animations';
import { siteConfig } from '@/config/siteConfig';

/**
 * Brief JSDoc description of the section's purpose.
 */
export default function SectionName() {
  return (
    <section id="section-id" className="bg-{color} py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.p className="font-body uppercase tracking-[0.3em] text-gold text-xs">
          SECTION LABEL
        </motion.p>
        <motion.h2 className="font-display italic text-3xl md:text-5xl text-charcoal">
          Section Title
        </motion.h2>
        
        {/* Section content */}
      </div>
    </section>
  );
}
```

### Animation Pattern

Use the predefined variants from `animations.ts`:

```tsx
import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/animations';

// Container with staggered children
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.div variants={fadeUp}>Child 1</motion.div>
  <motion.div variants={fadeUp}>Child 2</motion.div>
</motion.div>
```

Available variants:
- `fadeUp` — Fade in + slide up (most common)
- `fadeIn` — Simple opacity fade
- `staggerContainer` — Parent for staggered animations
- `scaleIn` — Fade in + scale up
- `slideInLeft` — Slide from left
- `slideInRight` — Slide from right

### Scroll Animation Hook

For triggering animations on scroll:

```tsx
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function MyComponent() {
  const [ref, inView] = useScrollAnimation(0.15); // threshold 0-1

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
    >
      Content
    </motion.div>
  );
}
```

### Modal Pattern (see `Rooms.tsx`)

```tsx
// 1. State for selected item
const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);

// 2. Lock body scroll when open
useEffect(() => {
  document.body.style.overflow = selectedItem ? 'hidden' : '';
  return () => { document.body.style.overflow = ''; };
}, [selectedItem]);

// 3. AnimatePresence wrapper for exit animations
<AnimatePresence>
  {selectedItem && (
    <div className="fixed inset-0 z-[200]">
      <motion.div 
        onClick={() => setSelectedItem(null)}
        className="absolute inset-0 bg-charcoal/90 backdrop-blur-md"
      />
      <motion.div className="relative ...">
        {/* Modal content */}
      </motion.div>
    </div>
  )}
</AnimatePresence>
```

---

## 📦 Site Configuration

All site content is centralized in `src/config/siteConfig.tsx`:

```tsx
export const siteConfig = {
  name: "Hotel Dharaney",
  contact: { phone, address, email, mapLocation },
  socials: [{ name, icon, url }],
  hero: { tagline, title, subDescription, images, carouselConfig },
  rooms: [{ id, name, area, sleeps, tag, price, description, amenities, mainImage, gallery }],
  testimonials: [{ id, name, country, rating, quote }],
  facilities: [{ id, icon, label, description }],
  description: "Modern elegance. Authentic warmth."
};
```

**When modifying content:**
- Update `siteConfig.tsx` for text, images, and data
- Icons are imported from `lucide-react` and stored as component references

---

## 🎠 Swiper Carousel Usage

```tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import required CSS
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

<Swiper
  modules={[Autoplay, EffectFade, Navigation]}
  effect="fade"
  fadeEffect={{ crossFade: true }}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
  loop={true}
>
  {items.map((item, i) => (
    <SwiperSlide key={i}>...</SwiperSlide>
  ))}
</Swiper>
```

Custom pagination/navigation styling is in `index.css`.

---

## 🎯 Common Tasks

### Adding a New Section

1. Create `src/components/NewSection.tsx`
2. Follow the section component pattern above
3. Import and add to `App.tsx` in the desired order
4. Add navigation link in `Navbar.tsx` if needed

### Adding a New Room

Update `siteConfig.rooms` array:

```tsx
{
  id: 7,
  name: 'New Room Type',
  area: '25.0',
  sleeps: 2,
  tag: 'New' | null,
  price: 'NPR X,XXX',
  description: '...',
  amenities: ['Amenity 1', 'Amenity 2'],
  mainImage: 'https://...',
  gallery: ['https://...', 'https://...']
}
```

### Adding a New Facility

Update `siteConfig.facilities` array:

```tsx
import { IconName } from 'lucide-react';

{ id: 7, icon: IconName, label: 'Facility Name', description: 'Brief description' }
```

### Changing Colors

Edit the `@theme` block in `src/index.css`:

```css
@theme {
  --color-gold: #NEW_HEX;
}
```

---

## 🧪 Scripts

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build to dist/
npm run preview  # Preview production build
npm run lint     # TypeScript type checking
npm run clean    # Remove dist folder
```

---

## 📝 Code Style Guidelines

1. **Exports**: Use `export default function ComponentName()` for components
2. **Props**: Define inline or extract to interface for complex components
3. **Styling**: Tailwind classes only (no CSS modules or styled-components)
4. **Class ordering**: Layout → Sizing → Spacing → Typography → Colors → Effects
5. **Responsive**: Mobile-first with `md:` and `lg:` breakpoint prefixes
6. **Comments**: JSDoc comment at top of each component file
7. **Imports order**: React → External libs → Internal modules → Styles

### Tailwind Class Conventions

```tsx
// ✅ Good: Grouped by category
className="flex items-center justify-between px-6 py-4 bg-cream text-charcoal hover:bg-gold transition-all"

// Button style pattern
className="bg-gold text-espresso font-body uppercase tracking-widest text-xs px-10 py-4 rounded-full hover:bg-gold/85 transition-all"

// Section header pattern
className="font-body uppercase tracking-[0.3em] text-gold text-xs block mb-4"

// Main heading pattern
className="font-display italic font-light text-charcoal text-3xl md:text-5xl lg:text-6xl"
```

---

## ⚠️ Important Caveats

1. **Tailwind v4**: Uses `@theme` CSS directive, NOT `tailwind.config.js`
2. **Motion import**: Use `motion/react` NOT `framer-motion`
3. **Image errors**: Rooms.tsx has fallback to picsum.photos on load error
4. **Z-index layers**: 
   - Navbar: `z-[100]`
   - Mobile menu: `z-[1000]`
   - Modals: `z-[200]`
5. **Grain effect**: Applied via `.grain::after` pseudo-element in CSS

---

## 🔗 External Resources

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Motion for React](https://motion.dev/docs/react-quick-start)
- [Swiper React](https://swiperjs.com/react)
- [Lucide Icons](https://lucide.dev/icons)

---

*Last updated: 2025*
