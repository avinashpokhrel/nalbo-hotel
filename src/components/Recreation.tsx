import { motion } from 'motion/react';
import { Droplets, HeartPulse, Martini } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/animations';

/**
 * Recreational activities section highlighting wellness, dining, and leisure facilities.
 */
export default function Recreation() {
  const features = [
    {
      icon: Droplets,
      title: 'Rooftop Swimming Pool',
      description: 'Unwind in our rooftop pool overlooking the Dharan skyline. Open year-round, the pool deck offers towel service, loungers, and breathtaking hill views.'
    },
    {
      icon: HeartPulse,
      title: 'Fitness Center',
      description: 'A fully equipped gym with cardio machines, free weights, and stretching zones. Personal training sessions available on request, seven days a week.'
    },
    {
      icon: Martini,
      title: 'Bar & Lounge',
      description: 'Sip handcrafted cocktails and curated spirits in our sophisticated lounge. The perfect space to unwind, socialize, or hold informal meetings after hours.'
    }
  ];

  return (
    <section id="recreation" className="bg-espresso relative overflow-hidden py-24">
      {/* Grain texture */}
      <div className="grain absolute inset-0 z-[1] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
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
            className="font-display italic text-5xl text-cream"
          >
            Recharge. Refresh. Rejoice.
          </motion.h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              className="group border border-cream/10 rounded-2xl p-8 hover:bg-sage/10 hover:border-sage/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold transition-all duration-300">
                <feature.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-display italic text-2xl text-cream mb-3">{feature.title}</h3>
              <p className="font-body text-cream/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
