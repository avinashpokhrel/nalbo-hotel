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
    <section id="about" className="bg-cream py-24 lg:py-32 overflow-hidden border-b border-gold/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <span className="font-body uppercase tracking-[0.3em] text-gold text-xs block mb-8">Our Heritage</span>
          <h2 className="font-display italic font-light text-charcoal text-3xl md:text-5xl lg:text-7xl mb-8 lg:mb-12 leading-tight">
            A Place Where Every Detail{/* <br /> on mobile can cause crunching */} <br className="hidden md:block" />Tells a Story
          </h2>
          
          <div className="font-body text-mocha/80 text-base md:text-lg lg:text-xl leading-relaxed space-y-6 md:space-y-8 max-w-2xl mx-auto">
            <p>
              Nestled in the vibrant heart of Dharan, Hotel Dharaney embodies modern luxury
              and the warmth of authentic Nepali hospitality. Designed for both the discerning leisure
              traveler and the focused business guest, we offer curated experiences that linger long
              after checkout.
            </p>
            <p>
              Every corner of our hotel reflects a deep respect for the culture and
              landscape that surrounds us. Nestled where the plains meet the mountains, our hotel serves as a sanctuary for those seeking a moment of peace, a productive business trip, or a base for Himalayan adventures.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-20 pt-12 md:pt-20 border-t border-gold/10">
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
            <div className="col-span-2 md:col-span-1">
              <p className="text-3xl lg:text-5xl font-display italic text-charcoal mb-2">
                <CountUp end={1} duration={1.5} start={inView ? 0 : undefined} />
              </p>
              <p className="font-body text-[10px] uppercase tracking-widest text-mocha/60">Rooftop Pool</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
