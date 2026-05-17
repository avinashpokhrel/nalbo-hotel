import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { siteConfig } from '@/config/siteConfig';
import { useBooking } from '@/context/BookingContext';

/**
 * Main navigation component with transparent/solid scroll transition and mobile menu.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBookingModal } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Recreation', href: '#recreation' },
    { name: 'Dining', href: '#dining' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* 
        Main Navigation Bar: 
        Handles both transparent (hero) and solid (scroll) states with a smooth backdrop transition.
      */}
      <nav
        className={clsx(
          'fixed top-0 w-full z-[100] transition-all duration-500 flex items-center justify-between px-4 sm:px-6 lg:px-16',
          scrolled ? 'py-4 bg-cream/95 backdrop-blur-md shadow-sm' : 'py-8 lg:py-10 bg-transparent'
        )}
      >
        <a href="/" className="group">
          <span
            className={clsx(
              'font-display italic text-xl lg:text-3xl tracking-[0.2em] transition-colors duration-500 font-light',
              scrolled ? 'text-charcoal' : 'text-cream'
            )}
          >
            {siteConfig.name.split(' ')[0].toUpperCase()}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={clsx(
                'font-body uppercase text-[11px] tracking-[0.15em] nav-link transition-colors duration-500 font-medium',
                scrolled ? 'text-gold' : 'text-cream'
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          {/* Booking CTA - Desktop Only */}
          <button
            onClick={openBookingModal}
            className="hidden lg:block bg-gold text-white font-body uppercase tracking-widest text-[11px] px-8 py-3 rounded-full hover:bg-gold/85 transition-all duration-300 font-bold shadow-lg shadow-gold/10 text-center whitespace-nowrap"
          >
            Book a Stay
          </button>

          {/* Mobile Menu Activation Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={clsx(
              'lg:hidden transition-colors duration-500 p-2 -mr-2',
              scrolled ? 'text-charcoal' : 'text-cream'
            )}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* 
        Mobile Fullscreen Menu Overlay:
        Decoupled from the main nav container to avoid stacking context issues during scroll.
        Uses espresso background with cream typography for a premium nighttime feel.
      */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-espresso z-[1000] flex flex-col items-center justify-center gap-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-cream hover:text-gold transition-colors p-2"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>

            {/* Navigation Navigation */}
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display italic text-3xl text-cream hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Mobile-specific Booking Action */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBookingModal();
              }}
              className="mt-4 bg-gold text-white rounded-full px-10 py-4 uppercase tracking-widest text-xs font-body hover:bg-gold/85 transition-all shadow-xl shadow-gold/10 whitespace-nowrap"
            >
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
