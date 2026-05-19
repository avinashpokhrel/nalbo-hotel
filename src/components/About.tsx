import { motion } from 'motion/react';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeUp } from '@/animations';

/**
 * Introduction section highlighting the hotel's heritage and key statistics.
 */
export default function About() {
  const [ref, inView] = useScrollAnimation();

  return (
    <section id="about" className="bg-cream py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-gold/10">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <span className="font-body uppercase tracking-[0.3em] text-sage text-xs block mb-8">Our Identity</span>
          <h2 className="font-display italic font-light text-charcoal text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 lg:mb-12 leading-tight">
            Comfort, Coziness,{/* <br /> on mobile can cause crunching */} <br className="hidden md:block" />& Modern Hospitality
          </h2>
          
          <div className="font-body text-mocha/80 text-base sm:text-lg md:text-xl leading-relaxed space-y-6 md:space-y-8 max-w-2xl mx-auto">
            <p>
              Located on the peaceful Shanti path in Dharan, Nalbo Hotel is your sanctuary of comfort. 
              Since our establishment in 2026 A.D., we have been dedicated to providing high-quality 
              accommodations with warm hospitality for every guest.
            </p>
            <p>
              Whether you are here for a business meeting in our dining hall or a relaxing stay 
              in our cozy rooms, we ensure a seamless experience with 24-hour room service, 
              free high-speed WiFi, and secure parking.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
