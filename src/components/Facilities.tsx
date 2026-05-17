import { motion } from 'motion/react';
import { siteConfig } from '@/config/siteConfig';
import { fadeUp, staggerContainer } from '@/animations';

/**
 * Grid of icon-based facilities and services provided by the hotel.
 */
export default function Facilities() {
  return (
    <section id="facilities" className="bg-cream py-16 sm:py-20 md:py-24 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body uppercase tracking-widest2 text-gold text-xs mb-4"
          >
            HOTEL FACILITIES
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display italic text-3xl sm:text-4xl md:text-5xl text-charcoal"
          >
            Everything You Need, and More
          </motion.h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10"
        >
          {siteConfig.facilities.map((facility) => {
            const IconComponent = facility.icon;
            return (
              <motion.div 
                key={facility.id}
                variants={fadeUp}
                className="flex flex-col items-center text-center group cursor-default px-2 sm:px-0"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-ivory border-2 border-ivory flex items-center justify-center mb-3 sm:mb-4 group-hover:border-gold transition-all duration-300 shadow-sm">
                  {IconComponent && <IconComponent size={20} className="text-mocha group-hover:text-gold transition-colors sm:w-[22px] sm:h-[22px]" />}
                </div>
                <h4 className="font-body uppercase text-[10px] sm:text-xs tracking-widest text-charcoal mb-1 font-bold">
                  {facility.label}
                </h4>
                <p className="font-body text-[10px] sm:text-[11px] text-mocha leading-snug">
                  {facility.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
