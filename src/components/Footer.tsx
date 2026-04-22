import { siteConfig } from '@/config/siteConfig';

/**
 * Site Footer:
 * Contains the secondary brand mark, quick navigation, and newsletter subscription.
 * Uses a deep espresso base to ground the page as a solid terminus.
 */
export default function Footer() {
  const exploreLinks = [
    { label: 'About', href: '#about' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Recreation', href: '#recreation' },
    { label: 'Dining', href: '#dining' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Contact', href: '#contact' },
  ];
  const amenities = ['Swimming Pool', 'Fitness Center', 'Bar & Lounge', 'Room Service', 'Free WiFi', 'Parking'];

  return (
    <footer className="bg-espresso border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Column 1 — Brand Identity */}
          <div className="col-span-2 lg:col-span-1">
            <a href="/" className="font-display italic text-2xl text-cream">
              {siteConfig.name}
            </a>
            <p className="font-body text-cream/50 text-xs mt-2 leading-6 max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Column 2 — Structural Navigation */}
          <div>
            <h5 className="font-body uppercase tracking-widest2 text-gold text-xs mb-5">Explore</h5>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-body text-sm text-cream/50 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Amenities */}
          <div>
            <h5 className="font-body uppercase tracking-widest2 text-gold text-xs mb-5">Amenities</h5>
            <ul className="space-y-3">
              {amenities.map((item) => (
                <li key={item} className="font-body text-sm text-cream/50 cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[10px] text-cream/30">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-body text-[10px] text-cream/30">
            Designed with warmth in Nepal 🇳🇵
          </p>
        </div>
      </div>
    </footer>
  );
}
