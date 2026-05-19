import { motion } from 'motion/react';
import { Droplets, HeartPulse, Martini } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/animations';

/**
 * Recreational activities section highlighting wellness, dining, and leisure facilities.
 */
export default function Recreation() {
  const features = [
    {
      icon: HeartPulse,
      title: 'Comfortable Lounge',
      description: 'Relax and unwind in our cozy lounge area, designed for quiet moments or social interactions with fellow travelers.'
    },
    {
      icon: Martini,
      title: 'Dining Hall',
      description: 'Our spacious dining hall serves as the heart of the hotel, ideal for meals, meetings, and celebrating special occasions.'
    },
    {
      icon: Droplets,
      title: 'Secure Parking',
      description: 'Enjoy the convenience of free on-site parking, ensuring your vehicle is safe and accessible throughout your stay.'
    }
  ];

  return (
    <section id="recreation" className="bg-ivory relative overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Grain texture */}
      <div className="grain absolute inset-0 z-[1] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body uppercase tracking-widest2 text-gold text-xs mb-4"
          >
            LEISURE & WELLNESS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display italic text-3xl sm:text-4xl md:text-5xl text-charcoal"
          >
            Recharge. Refresh. Rejoice.
          </motion.h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              className="group border border-gold/20 rounded-2xl p-6 sm:p-7 md:p-8 hover:bg-gold/5 hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gold/30 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:border-gold transition-all duration-300">
                <feature.icon size={20} className="text-gold sm:w-[22px] sm:h-[22px]" />
              </div>
              <h3 className="font-display italic text-xl sm:text-2xl text-charcoal mb-2 sm:mb-3">{feature.title}</h3>
              <p className="font-body text-mocha text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
