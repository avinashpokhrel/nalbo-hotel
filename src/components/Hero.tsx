import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeUp } from '@/animations';
import { siteConfig } from '@/config/siteConfig';
import { useBooking } from '@/context/BookingContext';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

/**
 * Full-screen hero section with an atmospheric image carousel and key call-to-actions.
 */
export default function Hero() {
  const { hero } = siteConfig;
  const { openBookingModal } = useBooking();

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Background Carousel */}
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: hero.carouselConfig.autoplayDelay, disableOnInteraction: false }}
          navigation={{
            prevEl: '.hero-prev',
            nextEl: '.hero-next',
          }}
          loop={true}
          className="h-full w-full"
        >
          {hero.images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full overflow-hidden">
                <motion.img
                  src={src}
                  alt={`Hero ${index}`}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main content overlay */}
      <div className="absolute inset-0 bg-charcoal/40 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/60 z-[2]" />

      {/* Grain texture */}
      <div className="grain absolute inset-0 z-[5] pointer-events-none" />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col h-full px-8 lg:px-16 items-center justify-center text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.p variants={fadeUp} className="font-body uppercase tracking-[0.25em] text-gold text-[11px] mb-6 font-semibold">
            {hero.tagline}
          </motion.p>

          <motion.h1 variants={fadeUp} className="font-display font-light italic text-cream text-4xl md:text-6xl lg:text-[84px] lg:leading-[1.1] mb-6 lg:mb-8">
            {hero.title}
          </motion.h1>

          <motion.p variants={fadeUp} className="font-body text-cream/70 text-base md:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-12 max-w-2xl mx-auto">
             {hero.subDescription}
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4 flex-wrap justify-center">
            <a href="#rooms" className="bg-gold text-espresso font-body uppercase tracking-widest text-xs px-10 py-4 rounded-full hover:bg-gold/85 transition-all duration-300 font-bold shadow-xl shadow-gold/10 text-center">
              Explore Rooms
            </a>
            <button 
              onClick={openBookingModal}
              className="border border-cream/50 text-cream font-body uppercase tracking-widest text-xs px-10 py-4 rounded-full hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-sm"
            >
              Book a Stay
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button className="hero-prev hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border border-cream/30 bg-charcoal/20 items-center justify-center text-cream hover:bg-gold hover:text-espresso hover:border-gold transition-all duration-300 backdrop-blur-md shadow-lg">
        <ChevronLeft size={32} strokeWidth={1} />
      </button>
      <button className="hero-next hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border border-cream/30 bg-charcoal/20 items-center justify-center text-cream hover:bg-gold hover:text-espresso hover:border-gold transition-all duration-300 backdrop-blur-md shadow-lg">
        <ChevronRight size={32} strokeWidth={1} />
      </button>

    </section>
  );
}
