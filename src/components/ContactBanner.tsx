import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { useBooking } from '@/context/BookingContext';

/**
 * Contact section featuring address, social links, and a themed interactive map.
 */
export default function ContactBanner() {
  const { contact, socials } = siteConfig;
  const { openBookingModal } = useBooking();

  return (
    <section id="contact" className="bg-cream py-16 sm:py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
          <div className="grain absolute inset-0 z-[1] pointer-events-none" />
      
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 items-center">
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="font-body uppercase tracking-[0.3em] text-gold text-[10px] block mb-6 font-bold text-center">Reservations & Location</span>
            <h2 className="font-display italic font-light text-charcoal text-3xl md:text-5xl lg:text-7xl mb-8 lg:mb-12 leading-tight text-center">
              Begin Your Journey<br className="hidden md:block" />to Serenity
            </h2>
            
            {/* Contact info — constrained to same width as button, centered */}
            <div className="flex flex-col gap-6 mb-16 w-full max-w-xs mx-auto">
              <div className="flex items-start gap-4 w-full">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <p className="font-body text-[10px] uppercase tracking-widest text-mocha font-bold">Address</p>
                  <p className="font-body text-mocha/80 text-sm leading-relaxed">{contact.address}</p>
                </div>
              </div>
          
              <div className="flex items-start gap-4 w-full">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold shrink-0">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <p className="font-body text-[10px] uppercase tracking-widest text-mocha font-bold">Booking Hotline</p>
                  {contact.landline && (
                    <p className="font-body text-mocha/80 text-sm leading-relaxed">Landline: {contact.landline}</p>
                  )}
                  <p className="font-body text-mocha/80 text-sm leading-relaxed">Mobile: {contact.phone}</p>
                </div>
              </div>
          
              <div className="flex items-start gap-4 w-full">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold shrink-0">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <p className="font-body text-[10px] uppercase tracking-widest text-mocha font-bold">Email Inquiries</p>
                  <p className="font-body text-mocha/80 text-sm leading-relaxed">{contact.email}</p>
                </div>
              </div>
            </div>
          
            <div className="flex flex-col gap-6 items-center w-full">
              <button 
                onClick={openBookingModal}
                className="w-full max-w-xs bg-gold text-white rounded-full px-12 py-5 uppercase tracking-[0.2em] text-[11px] font-body hover:bg-gold/85 transition-all shadow-xl shadow-gold/10 font-bold"
              >
                Book a Stay
              </button>
              
              <div className="flex gap-4 items-center">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={social.name}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gold hover:text-white hover:bg-gold p-2 rounded-full transition-colors"
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
            className="h-[400px] md:h-[500px] lg:h-[650px] w-full rounded-[32px] lg:rounded-[40px] overflow-hidden border border-gold/20 shadow-2xl relative group"
          >
            {contact.mapLocation.embedUrl === 'about:blank' ? (
              <div className="w-full h-full bg-ivory flex items-center justify-center text-center px-8">
                <div>
                  <p className="font-body uppercase tracking-[0.2em] text-[10px] text-mocha/60 mb-2">Map</p>
                  <p className="font-display italic text-2xl text-charcoal">Location Map Coming Soon</p>
                  <p className="font-body text-sm text-mocha/70 mt-3">Please use the address in the contact details for now.</p>
                </div>
              </div>
            ) : (
              <iframe 
                src={contact.mapLocation.embedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'contrast(1.1) opacity(0.9)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-700 group-hover:filter-none group-hover:opacity-100"
              />
            )}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-gold/20 rounded-[40px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
