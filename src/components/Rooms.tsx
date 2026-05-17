import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { X, Ruler, Users, ChevronRight, Check } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { fadeUp, staggerContainer } from '@/animations';
import { useBooking } from '@/context/BookingContext';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

/**
 * Accommodations section with a grid of rooms and a detailed modal view.
 */
export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<typeof siteConfig.rooms[0] | null>(null);
  const { openBookingModal } = useBooking();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedRoom) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedRoom]);

  return (
    <section id="rooms" className="bg-ivory py-16 sm:py-20 md:py-24 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-14 md:mb-16 gap-6 sm:gap-8">
          <div>
            <span className="font-body uppercase tracking-[0.3em] text-sage text-xs block mb-3 sm:mb-4">Accommodation</span>
            <h2 className="font-display italic font-light text-charcoal text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Sanctuaries of Comfort
            </h2>
          </div>
          <p className="font-body text-mocha/70 text-sm lg:text-base max-w-md">
            At Nalbo Hotel, we offer a selection of comfortable and cozy rooms designed to be your serene home away from home in Dharan.
          </p>
        </div>

        {/* Rooms Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8"
        >
          {siteConfig.rooms.map((room) => (
            <motion.div 
              key={room.id}
              variants={fadeUp}
              className="group bg-cream rounded-2xl sm:rounded-3xl md:rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedRoom(room)}
            >
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                <img 
                  src={room.mainImage} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {room.tag && (
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-gold text-white font-body uppercase text-[10px] tracking-widest px-3 sm:px-4 py-1.5 rounded-full font-bold">
                    {room.tag}
                  </div>
                )}
                <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-cream/90 backdrop-blur-sm text-charcoal font-body uppercase tracking-widest text-[10px] px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-4 sm:gap-6 text-[10px] uppercase tracking-widest text-mocha/50 mb-3 sm:mb-4 font-body">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Ruler size={14} className="text-gold" />
                    {room.area}m²
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Users size={14} className="text-gold" />
                    Sleeps {room.sleeps}
                  </div>
                </div>
                <h3 className="font-display italic text-xl sm:text-2xl text-charcoal mb-3 sm:mb-4 group-hover:text-gold transition-colors">{room.name}</h3>
                <div className="flex items-center justify-between mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gold/20">
                  <p className="font-body text-charcoal font-medium text-sm sm:text-base">{room.price} <span className="text-xs text-mocha/50 font-normal">/ night</span></p>
                  <ChevronRight size={20} className="text-gold transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Room Detail Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-8 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRoom(null)}
              className="absolute inset-0 bg-charcoal/80 cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-6xl bg-cream rounded-t-[24px] sm:rounded-[32px] lg:rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[95vh] sm:h-auto sm:max-h-[90vh] lg:h-[800px] z-10"
            >
              <button 
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cream shadow-lg flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-all"
              >
                <X size={20} className="sm:hidden" />
                <X size={24} className="hidden sm:block" />
              </button>

              {/* Gallery Section */}
              <div className="w-full lg:w-3/5 h-[280px] sm:h-[350px] lg:h-full relative shrink-0 bg-espresso">
                <Swiper
                  modules={[Pagination, Navigation]}
                  pagination={{ clickable: true }}
                  navigation={true}
                  loop={true}
                  className="h-full w-full room-modal-swiper"
                >
                  {selectedRoom.gallery.map((img, i) => (
                    <SwiperSlide key={i} className="h-full w-full">
                      <img 
                        src={img} 
                        alt={`${selectedRoom.name} feature ${i}`} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://picsum.photos/seed/${selectedRoom.id}-${i}/1200/800`;
                          target.referrerPolicy = "no-referrer";
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Info Section */}
              <div className="w-full lg:w-2/5 p-6 sm:p-8 lg:p-14 overflow-y-auto flex-1">
                <span className="font-body uppercase tracking-[0.2em] text-sage text-[10px] block mb-3 sm:mb-4 font-bold">Luxury Collection</span>
                <h3 className="font-display italic text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-charcoal mb-4 sm:mb-6 lg:mb-8 leading-tight">{selectedRoom.name}</h3>
                
                <p className="font-body text-mocha/80 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
                  {selectedRoom.description}
                </p>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
                  <div className="bg-ivory p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-gold/20">
                    <p className="font-body text-[10px] uppercase tracking-widest text-mocha/50 mb-1">Total Space</p>
                    <p className="font-body text-sm sm:text-base text-charcoal font-medium">{selectedRoom.area} m²</p>
                  </div>
                  <div className="bg-ivory p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-gold/20">
                    <p className="font-body text-[10px] uppercase tracking-widest text-mocha/50 mb-1">Max Guests</p>
                    <p className="font-body text-sm sm:text-base text-charcoal font-medium">{selectedRoom.sleeps} Adults</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                  <p className="font-body uppercase tracking-widest text-[10px] text-mocha font-bold">Room Amenities</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-y-3">
                    {selectedRoom.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2 sm:gap-3">
                        <Check size={14} className="text-gold shrink-0" />
                        <span className="font-body text-xs text-mocha/80">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-8 sm:pt-10 border-t border-gold/20 flex flex-col gap-4 sm:gap-6">
                  <div className="flex items-end gap-2">
                    <span className="font-body text-2xl sm:text-3xl font-medium text-charcoal">{selectedRoom.price}</span>
                    <span className="font-body text-mocha/50 text-sm mb-0.5 sm:mb-1">/ per night</span>
                  </div>
                  <button 
                    onClick={openBookingModal}
                    className="w-full bg-gold text-white font-body uppercase tracking-[0.2em] text-[11px] py-4 sm:py-5 rounded-full hover:bg-gold/85 transition-all font-bold shadow-lg shadow-gold/20"
                  >
                    Reserve This Room
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
