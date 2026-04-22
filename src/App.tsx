/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Recreation from '@/components/Recreation';
import Dining from '@/components/Dining';
import Facilities from '@/components/Facilities';
import Testimonials from '@/components/Testimonials';
import ContactBanner from '@/components/ContactBanner';
import Footer from '@/components/Footer';
import { BookingProvider } from '@/context/BookingContext';

export default function App() {
  return (
    <BookingProvider>
      <main className="selection:bg-gold selection:text-espresso">
        <Navbar />
        <Hero />
        <About />
        <Rooms />
        <Recreation />
        <Dining />
        <Facilities />
        <Testimonials />
        <ContactBanner />
        <Footer />
      </main>
    </BookingProvider>
  );
}
