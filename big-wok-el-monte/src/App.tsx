/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * test
 */

import { MapPin, Phone, Clock, FileText, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import logo from './assets/logo.jpg';
import headerImage from './assets/Header.png';
import susanImage from './assets/Susan.png';
import noodleImage from './assets/Noodle.png';
import wontonImage from './assets/WONTON.png';
import caterImage from './assets/CATER.png';

export default function App() {
  const menuPdfUrl = new URL('./assets/BIG WOK MENU.pdf', import.meta.url).href;
  const orderNowUrl = 'https://www.grubhub.com/restaurant/big-wok-chinese-fast-food-3253-santa-anita-ave-el-monte/10863392?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&delivery=true&rwg_token=AFd1xnHyKdiKBNzBQ2O_SNkmgCs57Jx15CyKcmbAC07B26Ug2xIZHQo3Qc_D3hO5MGsqLPVM3VUUxOF4vhRrCof2X0VcHvE15w%3D%3D';
  const phoneCallUrl = 'tel:+16572172224';
  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Specials', href: '#specials' },
    { name: 'Catering', href: '#catering' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-white border-b border-surface-container-high">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="h-12 flex items-center">
            <img 
              src={logo}
              alt="Big Wok Logo" 
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-primary font-headline italic font-black uppercase tracking-tighter transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href={orderNowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-6 py-2 rounded-xl font-bold transition-transform active:scale-95 uppercase italic tracking-wider"
          >
            Order Now
          </a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={headerImage}
              alt="Sizzling wok fried noodles"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 max-w-4xl"
          >
            <h1 className="font-headline italic font-black text-6xl md:text-8xl text-white uppercase tracking-tighter leading-none mb-4 text-shadow-hero">
              BIG WOK <br />EL MONTE
            </h1>
            <p className="text-white text-xl md:text-2xl font-medium tracking-wide">
              BIG PORTIONS. LOW PRICES. 
            </p>
            <p className="text-white text-xl md:text-2xl font-medium mb-10 tracking-wide">
              THE BEST CHINESE FAST FOOD.
            </p>
            <a
              href={orderNowUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-container text-white text-xl px-12 py-5 rounded-xl font-bold uppercase italic tracking-widest transition-all duration-300 shadow-2xl"
            >
              ORDER NOW
            </a>
          </motion.div>
        </section>

        {/* Who We Are Section */}
        <section id="who-we-are" className="pt-16 pb-10 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="font-headline italic font-black text-5xl text-primary uppercase tracking-tighter">WHO WE ARE</h2>
              <div className="h-1 flex-grow bg-surface-container-high"></div>
            </div>
            <div className="max-w-5xl mx-auto mb-8">
              <div className="bg-white border border-surface-container-high rounded-2xl shadow-sm p-6 md:p-8 grid md:grid-cols-[340px_1fr] gap-6 md:gap-8 items-center">
                <div className="w-full max-w-[340px] mx-auto md:mx-0 rounded-xl overflow-hidden shadow-md">
                  <img
                    src={susanImage}
                    alt="Susan from Big Wok"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-stone-700 text-base md:text-lg leading-relaxed">
                  Big Wok Chinese Fast Food is a celebrated dining destination in El Monte, renowned for its authentic and flavorful Chinese cuisine that consistently delights the palate. The establishment boasts an inviting atmosphere where customers can enjoy a variety of delicious dishes prepared with high-quality ingredients. Signature offerings include crispy orange chicken, rich chow mein, and savory broccoli beef. Each crafted to deliver exceptional taste while ensuring generous portions that provide excellent value for money. The combination plates are particularly popular among customers seeking hearty meals without breaking the bank. Visitors often highlight the restaurant&apos;s friendly staff who ensure a warm welcome and attentive service throughout the dining experience. With a focus on fresh flavors and ample portion sizes, Big Wok stands out as not just another fast food option but rather as an outstanding choice for those craving quality Asian cuisine at affordable prices. Whether enjoyed dine-in or taken away, each meal reflects Big Wok&apos;s commitment to excellence in both flavor and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="pt-10 pb-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="font-headline italic font-black text-5xl text-primary uppercase tracking-tighter">MENU</h2>
              <div className="h-1 flex-grow bg-surface-container-high"></div>
            </div>
            <div className="max-w-5xl mx-auto space-y-6">
                  <iframe
                    src={menuPdfUrl}
                    title="Big Wok Menu PDF"
                    className="w-full h-[1100px] rounded-lg shadow-2xl bg-white"
                  />
                  <div className="text-center">
                    <a
                      href={menuPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                    >
                      Open menu PDF in a new tab
                    </a>
                  </div>
                </div>
            </div>
        </section>

        {/* Specials Section */}
        <section id="specials" className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-headline italic font-black text-5xl text-primary uppercase tracking-tighter mb-16 text-center">
              WOK-FIRED SPECIALS
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Special 1 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm flex flex-col sm:flex-row gap-8 items-center"
              >
                <div className="w-full sm:w-64 h-64 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
                  <img
                    src={noodleImage}
                    alt="Special Chow mein"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-headline italic font-black text-3xl mb-4 leading-tight uppercase">
                    Special Order Fried Rice and Chow Mein
                  </h3>
                  <p className="text-stone-600 text-lg">
                    A customer favorite, get our classic chow mein made fresh to order with any meat of your choice.
                  </p>
                </div>
              </motion.div>

              {/* Special 2 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm flex flex-col sm:flex-row gap-8 items-center relative overflow-hidden"
              >
                <div className="w-full sm:w-64 h-64 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
                  <img
                    src={wontonImage}
                    alt="Wonton Soup"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="py-4 sm:py-6">
                  <h3 className="font-headline italic font-black text-3xl mb-4 leading-tight uppercase">
                    Wonton Soup
                  </h3>
                  <p className="text-stone-600 text-lg">
                    Our classic wonton soup is the perfect meal that soothes the soul, full of flavor and made fresh every time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Catering Section */}
        <section id="catering" className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-primary text-white rounded-3xl overflow-hidden relative flex flex-col lg:flex-row">
              <div className="p-8 md:p-12 lg:w-2/3 relative z-10">
                <h2 className="font-headline italic font-black text-4xl md:text-5xl uppercase tracking-tighter mb-6">
                  Catering For Your Events
                </h2>
                <p className="text-xl opacity-90 mb-10 max-w-xl">
                  Bring the Big Wok experience to your next gathering. Perfect for parties, office meetings, and family events.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl">
                    <h4 className="font-headline italic font-black text-2xl mb-2 uppercase">Medium Tray</h4>
                    <p className="opacity-80">Perfect for smaller gatherings of 8-12 people.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl">
                    <h4 className="font-headline italic font-black text-2xl mb-2 uppercase">Large Tray</h4>
                    <p className="opacity-80">Ideal for bigger crowds of 15-20 people.</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 bg-black/20 p-6 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-yellow-400" />
                    <span className="font-bold">Required: At least one day's notice</span>
                  </div>
                  <a
                    href={phoneCallUrl}
                    className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-xl font-black uppercase italic tracking-tighter hover:bg-stone-100 transition-colors text-center"
                  >
                    Call Us Now
                  </a>
                </div>
              </div>
              <div className="lg:w-1/3 h-64 lg:h-auto relative">
                <img
                  src={caterImage}
                  alt="Catering tray"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-headline italic font-black text-5xl text-primary uppercase tracking-tighter mb-12">
                  FIND US
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Address</h4>
                      <p className="text-stone-600">
                        3253 Santa Anita Ave. Ste. B<br />
                        El Monte, CA 91733
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Phone</h4>
                      <p className="text-stone-600">(657) 217-2224</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Hours</h4>
                      <p className="text-stone-600">Mon - Sun: 10:30 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[450px] rounded-3xl overflow-hidden shadow-xl border-8 border-white">
                <iframe
                  title="Big Wok El Monte Map"
                  src="https://www.google.com/maps?q=3253+Santa+Anita+Ave+Ste+B,+El+Monte,+CA+91733&z=16&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-surface-container-high py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-xl italic font-black text-primary font-headline uppercase tracking-tighter mb-2">
              Big Wok
            </div>
            <p className="text-sm text-stone-500">
              © {new Date().getFullYear()} Big Wok El Monte. Big Portions. Low Prices.
            </p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-stone-500 hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-stone-500 hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-stone-500 hover:text-primary text-sm transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
