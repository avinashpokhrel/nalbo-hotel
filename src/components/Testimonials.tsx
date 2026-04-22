import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

/**
 * Guest Feedback Section:
 * Features a soul-infused carousel of guest experiences using Swiper.js.
 * Highlights the emotional connection guests have with the property.
 */
export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-espresso py-24 relative overflow-hidden">
      <div className="grain absolute inset-0 z-[1] opacity-5 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <span className="font-body uppercase tracking-[0.3em] text-gold text-[10px] block mb-4">Guest Experiences</span>
          <h2 className="font-display italic font-light text-cream text-3xl md:text-5xl lg:text-6xl text-center w-full">Words from Our Soulful Travelers</h2>
        </div>

        <div className="relative group/nav">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 8000 }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: '.testi-prev',
              nextEl: '.testi-next',
            }}
            loop={true}
            className="testimonial-swiper pb-24"
          >
            {siteConfig.testimonials.map((testi) => (
              <SwiperSlide key={testi.id}>
                <div className="flex flex-col items-center text-center">
                  <Quote size={48} className="text-gold/20 mb-8" />
                  <div className="flex gap-1 mb-8">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-display italic text-2xl lg:text-3xl text-cream/90 leading-relaxed mb-10 max-w-3xl px-4">
                    "{testi.quote}"
                  </p>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-center">
                      <p className="font-body text-cream font-medium text-sm uppercase tracking-widest">{testi.name}</p>
                      <p className="font-body text-gold/60 text-[10px] uppercase tracking-widest mt-1">{testi.country}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Opacity Arrows - desktop only */}
          <button className="testi-prev absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex -translate-x-12 z-20 text-cream/30 hover:text-gold transition-colors opacity-0 group-hover/nav:opacity-100 duration-300">
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          <button className="testi-next absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex translate-x-12 z-20 text-cream/30 hover:text-gold transition-colors opacity-0 group-hover/nav:opacity-100 duration-300">
            <ChevronRight size={48} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
}
