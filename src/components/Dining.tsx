import { motion } from 'motion/react';
import { fadeUp } from '@/animations';

/**
 * Gastronomy section showcasing the main restaurant, bar, and room service options.
 */
export default function Dining() {
  return (
    <section id="dining" className="bg-ivory py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body uppercase tracking-widest2 text-gold text-xs mb-3 sm:mb-4 font-bold"
          >
            DINING & BAR
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display italic text-3xl sm:text-4xl md:text-5xl text-charcoal"
          >
            Hearty Meals & Warm Service
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {/* Left large card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl sm:rounded-2xl overflow-hidden relative group h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]"
          >
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&auto=format&fit=crop"
              alt="Main Restaurant"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
            
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
              <span className="inline-block bg-gold text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-body mb-3 sm:mb-4">
                Open 7AM – 10PM
              </span>
              <h3 className="font-display italic text-2xl sm:text-3xl text-cream mb-2">Dining Hall</h3>
              <p className="font-body text-cream/70 text-sm max-w-md">
                Our versatile dining hall is perfect for family meals, business meetings, and social gatherings. Enjoy authentic flavors in a welcoming setting.
              </p>
            </div>
          </motion.div>

          {/* Right stacked cards */}
          <div className="grid gap-5 sm:gap-6 md:gap-8">
            {/* Card A: Bar & Lounge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl sm:rounded-2xl overflow-hidden relative group h-[240px] sm:h-[260px] md:h-[265px] lg:h-[265px]"
            >
              <img
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&auto=format&fit=crop"
                alt="Bar & Lounge"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
              
              <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6">
                <span className="inline-block bg-gold text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-body mb-2">
                  Open 5PM – 1AM
                </span>
                <h3 className="font-display italic text-xl sm:text-2xl text-cream mb-1 sm:mb-1.5">Bar & Lounge</h3>
                <p className="font-body text-cream/70 text-xs sm:text-sm">
                  Premium spirits, handcrafted cocktails, and a curated wine list.
                </p>
              </div>
            </motion.div>

            {/* Card B: Room Service */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl sm:rounded-2xl overflow-hidden relative group h-[240px] sm:h-[260px] md:h-[265px] lg:h-[265px]"
            >
              <img
                src="https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?w=800&auto=format&fit=crop"
                alt="Room Service"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
              
              <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6">
                <span className="inline-block bg-gold text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-body mb-2">
                  24 Hours
                </span>
                <h3 className="font-display italic text-xl sm:text-2xl text-cream mb-1 sm:mb-1.5">Room Service</h3>
                <p className="font-body text-cream/70 text-xs sm:text-sm">
                  Full menu delivered to your door, any hour of the day or night.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
