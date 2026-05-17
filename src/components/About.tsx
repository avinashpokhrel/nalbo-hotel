import { motion } from 'motion/react';
import CountUp from 'react-countup';
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
              Since our establishment in 2026, we have been dedicated to providing high-quality 
              accommodations at prices that welcome everyone.
            </p>
            <p>
              Whether you are here for a business meeting in our dining hall or a relaxing stay 
              in our cozy rooms, we ensure a seamless experience with 24-hour room service, 
              free high-speed WiFi, and secure parking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-20 pt-12 md:pt-20 border-t border-gold/20">
            <div>
              <p className="text-3xl lg:text-5xl font-display italic text-charcoal mb-2">
                <CountUp end={6} duration={2.5} start={inView ? 0 : undefined} />
              </p>
              <p className="font-body text-[10px] uppercase tracking-widest text-mocha/60">Room Categories</p>
            </div>
            <div>
              <p className="text-3xl lg:text-5xl font-display italic text-charcoal mb-2">
                <CountUp end={1200} duration={2.5} suffix="+" start={inView ? 0 : undefined} />
              </p>
              <p className="font-body text-[10px] uppercase tracking-widest text-mocha/60">Annual Guests</p>
            </div>
            <div className="sm:col-span-1">
              <p className="text-3xl lg:text-5xl font-display italic text-charcoal mb-2">
                <CountUp end={24} duration={1.5} suffix="h" start={inView ? 0 : undefined} />
              </p>
              <p className="font-body text-[10px] uppercase tracking-widest text-mocha/60">Room Service</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
