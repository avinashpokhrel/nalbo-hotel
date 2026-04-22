import { motion } from 'motion/react';
import { fadeUp } from '@/animations';

/**
 * Gastronomy section showcasing the main restaurant, bar, and room service options.
 */
export default function Dining() {
  return (
    <section id="dining" className="bg-ivory py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body uppercase tracking-widest2 text-gold text-xs mb-4 font-bold"
          >
            DINING & BAR
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display italic text-3xl md:text-5xl text-charcoal"
          >
            A Feast for Every Sense
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left large card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden relative group h-[350px] md:h-[450px] lg:min-h-[500px]"
          >
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&auto=format&fit=crop"
              alt="Main Restaurant"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <span className="inline-block bg-gold text-espresso text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-body mb-4">
                Open 7AM – 10PM
              </span>
              <h3 className="font-display italic text-3xl text-cream mb-2">Main Restaurant</h3>
              <p className="font-body text-cream/70 text-sm max-w-md">
                Farm-fresh ingredients, authentic Nepali flavors, and contemporary plating. Breakfast, lunch, and dinner served daily.
              </p>
            </div>
          </motion.div>

          {/* Right stacked cards */}
          <div className="grid gap-6 lg:gap-8">
            {/* Card A: Bar & Lounge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden relative group h-[240px] md:h-auto"
            >
              <img
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&auto=format&fit=crop"
                alt="Bar & Lounge"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-gold text-espresso text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-body mb-2">
                  Open 5PM – 1AM
                </span>
                <h3 className="font-display italic text-2xl text-cream mb-1">Bar & Lounge</h3>
                <p className="font-body text-cream/70 text-xs">
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
              className="rounded-2xl overflow-hidden relative group h-[240px] md:h-auto"
            >
              <img
                src="https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?w=800&auto=format&fit=crop"
                alt="Room Service"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-gold text-espresso text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-body mb-2">
                  24 Hours
                </span>
                <h3 className="font-display italic text-2xl text-cream mb-1">Room Service</h3>
                <p className="font-body text-cream/70 text-xs">
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
