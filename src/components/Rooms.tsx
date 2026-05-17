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
    <section id="rooms" className="bg-ivory py-24 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="font-body uppercase tracking-[0.3em] text-sage text-xs block mb-4">Accommodation</span>
            <h2 className="font-display italic font-light text-charcoal text-3xl md:text-5xl lg:text-6xl">
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {siteConfig.rooms.map((room) => (
            <motion.div 
              key={room.id}
              variants={fadeUp}
              className="group bg-cream rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedRoom(room)}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={room.mainImage} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {room.tag && (
                  <div className="absolute top-6 left-6 bg-gold text-white font-body uppercase text-[10px] tracking-widest px-4 py-1.5 rounded-full font-bold">
                    {room.tag}
                  </div>
                )}
                <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-cream/90 backdrop-blur-sm text-charcoal font-body uppercase tracking-widest text-[10px] px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-mocha/50 mb-4 font-body">
                  <div className="flex items-center gap-2">
                    <Ruler size={14} className="text-gold" />
                    {room.area}m²
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-gold" />
                    Sleeps {room.sleeps}
                  </div>
                </div>
                <h3 className="font-display italic text-2xl text-charcoal mb-4 group-hover:text-gold transition-colors">{room.name}</h3>
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gold/20">
                  <p className="font-body text-charcoal font-medium">{room.price} <span className="text-xs text-mocha/50 font-normal">/ night</span></p>
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
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 overflow-hidden">
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
              className="relative w-full max-w-6xl bg-cream rounded-[32px] lg:rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row h-[90vh] lg:h-[800px] z-10"
            >
              <button 
                onClick={() => setSelectedRoom(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-cream shadow-lg flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-all"
              >
                <X size={24} />
              </button>

              {/* Gallery Section */}
              <div className="w-full lg:w-3/5 h-[350px] lg:h-full relative shrink-0 bg-espresso">
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
              <div className="w-full lg:w-2/5 p-8 lg:p-14 overflow-y-auto">
                <span className="font-body uppercase tracking-[0.2em] text-sage text-[10px] block mb-4 font-bold">Luxury Collection</span>
                <h3 className="font-display italic text-3xl lg:text-5xl text-charcoal mb-6 lg:mb-8 leading-tight">{selectedRoom.name}</h3>
                
                <p className="font-body text-mocha/80 text-base leading-relaxed mb-10">
                  {selectedRoom.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-12">
                  <div className="bg-ivory p-4 rounded-2xl border border-gold/20">
                    <p className="font-body text-[10px] uppercase tracking-widest text-mocha/50 mb-1">Total Space</p>
                    <p className="font-body text-charcoal font-medium">{selectedRoom.area} m²</p>
                  </div>
                  <div className="bg-ivory p-4 rounded-2xl border border-gold/20">
                    <p className="font-body text-[10px] uppercase tracking-widest text-mocha/50 mb-1">Max Guests</p>
                    <p className="font-body text-charcoal font-medium">{selectedRoom.sleeps} Adults</p>
                  </div>
                </div>

                <div className="space-y-4 mb-12">
                  <p className="font-body uppercase tracking-widest text-[10px] text-mocha font-bold">Room Amenities</p>
                  <div className="grid grid-cols-2 gap-y-3">
                    {selectedRoom.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check size={14} className="text-gold" />
                        <span className="font-body text-xs text-mocha/80">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-10 border-t border-gold/20 flex flex-col gap-6">
                  <div className="flex items-end gap-2">
                    <span className="font-body text-3xl font-medium text-charcoal">{selectedRoom.price}</span>
                    <span className="font-body text-mocha/50 text-sm mb-1">/ per night</span>
                  </div>
                  <button 
                    onClick={openBookingModal}
                    className="w-full bg-gold text-white font-body uppercase tracking-[0.2em] text-[11px] py-5 rounded-full hover:bg-gold/85 transition-all font-bold shadow-lg shadow-gold/20"
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
