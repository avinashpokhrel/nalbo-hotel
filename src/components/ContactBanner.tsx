import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { useBooking } from '@/context/BookingContext';

/**
 * Contact section featuring address, social links, and a themed interactive map.
 */
export default function ContactBanner() {
  const { contact, socials } = siteConfig;
  const { openBookingModal } = useBooking();

  return (
    <section id="contact" className="bg-espresso py-24 px-8 lg:px-16 relative overflow-hidden">
      <div className="grain absolute inset-0 z-[1] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-body uppercase tracking-[0.3em] text-gold text-[10px] block mb-6 font-bold">Reservations & Location</span>
            <h2 className="font-display italic font-light text-cream text-3xl md:text-5xl lg:text-7xl mb-8 lg:mb-12 leading-tight">
              Begin Your Journey<br className="hidden md:block" />to Serenity
            </h2>
            
            <div className="space-y-10 mb-16">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold shrink-0 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-body text-[10px] uppercase tracking-widest text-mocha mb-2 font-bold">Address</p>
                  <p className="font-body text-cream/70 text-base leading-relaxed">{contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold shrink-0 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-body text-[10px] uppercase tracking-widest text-mocha mb-2 font-bold">Booking Hotline</p>
                  <p className="font-body text-cream/70 text-base leading-relaxed">{contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold shrink-0 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-body text-[10px] uppercase tracking-widest text-mocha mb-2 font-bold">Email Inquiries</p>
                  <p className="font-body text-cream/70 text-base leading-relaxed">{contact.email}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <button 
                onClick={openBookingModal}
                className="w-full sm:w-auto bg-gold text-espresso rounded-full px-12 py-5 uppercase tracking-[0.2em] text-[11px] font-body hover:bg-gold/85 transition-all shadow-xl shadow-gold/10 font-bold"
              >
                Book a Stay
              </button>
              
              <div className="flex gap-6 border-l border-cream/10 pl-6 h-8 items-center">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={social.name}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-cream/30 hover:text-gold transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] md:h-[500px] lg:h-[650px] w-full rounded-[32px] lg:rounded-[40px] overflow-hidden border border-cream/10 shadow-2xl relative group"
          >
            <iframe 
              src={contact.mapLocation.embedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'contrast(1.2) opacity(0.8)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-700 group-hover:filter-none group-hover:opacity-100"
            />
            
            {/* Overlay Gradient to blend with Espresso */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-cream/10 rounded-[40px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
