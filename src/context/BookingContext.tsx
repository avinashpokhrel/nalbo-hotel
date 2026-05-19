import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Copy, Check } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

interface BookingContextType {
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<'primary' | 'secondary' | null>(null);

  const openBookingModal = () => setIsOpen(true);
  const closeBookingModal = () => {
    setIsOpen(false);
    setCopiedField(null);
  };

  const primaryNumber = siteConfig.contact.landline ?? siteConfig.contact.phone;
  const secondaryNumber = siteConfig.contact.landline ? siteConfig.contact.phone : null;

  const handleCopyNumber = (number: string, field: 'primary' | 'secondary') => {
    navigator.clipboard.writeText(number);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1800);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <BookingContext.Provider value={{ openBookingModal, closeBookingModal }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeBookingModal}
              className="absolute inset-0 bg-charcoal/80 cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-cream rounded-2xl sm:rounded-[32px] shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              <div className="flex-shrink-0">
                <button
                  onClick={closeBookingModal}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 text-mocha/40 hover:text-charcoal transition-colors p-2"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 sm:p-8 text-center">
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone size={24} className="text-gold" />
                </div>
                
                <h3 className="font-display italic text-2xl lg:text-3xl text-charcoal mb-4 leading-tight">
                  Secure Your Sanctuary
                </h3>
                
                <p className="font-body text-mocha/80 text-sm leading-relaxed mb-8">
                  To ensure the best possible experience and personalized service, we handle all reservations via direct communication. Please call our reception to finalize your stay.
                </p>

                <div className="bg-ivory border border-gold/10 rounded-2xl p-4 mb-6 text-left space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-body text-[10px] uppercase tracking-widest text-mocha/50 mb-1 font-bold">Landline</p>
                      <button
                        type="button"
                        onClick={() => handleCopyNumber(primaryNumber, 'primary')}
                        className="font-serif text-xl lg:text-2xl text-charcoal hover:text-gold transition-colors text-left"
                        title="Click to copy"
                      >
                        {primaryNumber}
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyNumber(primaryNumber, 'primary')}
                      className="mt-1 p-2 rounded-lg hover:bg-gold/10 transition-all text-gold"
                      title="Copy landline"
                      aria-label="Copy primary landline"
                    >
                      {copiedField === 'primary' ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>

                  {secondaryNumber && (
                    <div className="pt-3 border-t border-gold/10 flex items-start justify-between gap-3">
                      <div>
                        <p className="font-body text-[10px] uppercase tracking-widest text-mocha/50 mb-1 font-bold">Mobile</p>
                        <button
                          type="button"
                          onClick={() => handleCopyNumber(secondaryNumber, 'secondary')}
                          className="font-serif text-lg lg:text-xl text-charcoal hover:text-gold transition-colors text-left"
                          title="Click to copy"
                        >
                          {secondaryNumber}
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopyNumber(secondaryNumber, 'secondary')}
                        className="mt-1 p-2 rounded-lg hover:bg-gold/10 transition-all text-gold"
                        title="Copy mobile"
                        aria-label="Copy secondary mobile"
                      >
                        {copiedField === 'secondary' ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <a 
                    href={`tel:${primaryNumber}`}
                    className="flex items-center justify-center gap-3 w-full bg-gold text-white font-body uppercase tracking-[0.2em] text-[11px] py-4 rounded-full hover:bg-gold/85 transition-all font-bold shadow-lg shadow-gold/20"
                  >
                    <Phone size={14} />
                    Call Reception Now
                  </a>

                  {secondaryNumber && (
                    <a 
                      href={`tel:${secondaryNumber}`}
                      className="flex items-center justify-center gap-3 w-full border border-gold text-gold font-body uppercase tracking-[0.2em] text-[11px] py-4 rounded-full hover:bg-gold/10 transition-all font-bold"
                    >
                      <Phone size={14} />
                      Call Mobile Hotline
                    </a>
                  )}
                  
                  <div className="pt-4 border-t border-gold/10">
                    <p className="font-body text-[10px] text-mocha/70 uppercase tracking-widest mb-4">
                      Or Connect via Socials
                    </p>
                    <div className="flex justify-center gap-6">
                      {siteConfig.socials.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-ivory border border-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all shadow-sm"
                          title={social.name}
                        >
                          <social.icon size={20} />
                        </a>
                      ))}
                    </div>
                  </div>

                  <p className="font-body text-[10px] text-mocha/70 uppercase tracking-widest">
                    Available 24/7 for our guests
                  </p>
                </div>
              </div>

              {/* Decorative base bar */}
              <div className="h-2 w-full bg-gold/30" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
