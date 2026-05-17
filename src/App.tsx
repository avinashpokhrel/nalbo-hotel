import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Recreation from '@/components/Recreation';
import Dining from '@/components/Dining';
import Facilities from '@/components/Facilities';
// import Testimonials from '@/components/Testimonials'; // Commented out: To be reused later when testimonials are available
import ContactBanner from '@/components/ContactBanner';
import Footer from '@/components/Footer';
import { BookingProvider } from '@/context/BookingContext';

export default function App() {
  return (
    <BookingProvider>
      <main className="selection:bg-gold selection:text-white">
        <Navbar />
        <Hero />
        <About />
        <Rooms />
        <Recreation />
        <Dining />
        <Facilities />
{/* <Testimonials /> */} {/* Commented out: Re-enable when client testimonials are ready to be displayed */}
        <ContactBanner />
        <Footer />
      </main>
    </BookingProvider>
  );
}
