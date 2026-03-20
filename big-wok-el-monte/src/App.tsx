/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * test
 */

import { MapPin, Phone, Clock, FileText, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const navLinks = [
    { name: 'Hero', href: '#hero' },
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
              src="https://picsum.photos/seed/bigwoklogo/200/200" 
              alt="Big Wok Logo" 
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
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
          <button className="bg-primary text-on-primary px-6 py-2 rounded-xl font-bold transition-transform active:scale-95 uppercase italic tracking-wider">
            Order Now
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPvjVahWS-KOiovHqqyRsiHmLWI1ksS8gTywUXdgDTKghzI8mqVnFx1u1wfwF_ktm51c747T2ht_N8f8T4gTz0hgL8bFIBPYEKDKptS57cGxkivVfDTD9YoM6hMcvNuk9AZQ5aM7tJoNESRI62eRToXWzFsaH5J31U1lvHiojhtIzu3Ugq1Kr-_nT6t4WcJpIufEBcRwYcy_YmhNegjgi6dFQe0jaU_oPqbT86yGng8j5kqdUPtLVLY0dgNTLCJFRZ4VH2Acq9W6s_"
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
            <p className="text-white text-xl md:text-2xl font-medium mb-10 tracking-wide">
              BIG PORTIONS. LOW PRICES. LOCAL FLAVOR.
            </p>
            <button className="bg-primary hover:bg-primary-container text-white text-xl px-12 py-5 rounded-xl font-bold uppercase italic tracking-widest transition-all duration-300 shadow-2xl">
              ORDER NOW
            </button>
          </motion.div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="font-headline italic font-black text-5xl text-primary uppercase tracking-tighter">MENU</h2>
              <div className="h-1 flex-grow bg-surface-container-high"></div>
            </div>
            
            <div className="bg-surface-container-low rounded-2xl shadow-sm border border-surface-container-high overflow-hidden">
              <div className="w-full h-[800px] overflow-y-auto custom-scrollbar p-4 md:p-12">
                <div className="max-w-5xl mx-auto space-y-12">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXwnU6t_bo373uxxjmXzw4T_fX2gNvYl2SeMUFoguSEbhp2pyQsKJIC3k7zuzSEmMbZy8DxoK9Y7cNgWrvKcJWpJ6Tec-0y9M7Tc4N95K3YO7Y8Wj6_Wjn9dM-q-7Nz7nbBmzsYGBRIei2w0ZlCtptMN_lGsHmhXJD6KcrT8CNjY5aE41xxpR8I_uPgnaIzI6ZuNDJyQ0TQBB2piCJk0kCgCicuJjZsT52o4vh5qe7TKvTMpEl5fJoXVlPZM9XbIn8Wx3WLxfdH5ug"
                    alt="Menu Page 1"
                    className="w-full shadow-2xl rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC378E-YvA8ER5Rin6QLlL-T7c8UaLN6vPzmXuJ4FLpK3tGnxlTSAPFsTJrvBji7KYr8ptI4QU7eKHe_KRZPXM4oG7nTR5AdzYSExbTQfqv-PshKc_PV35aoDsKyDlIW78aj4uMiBV4pqeb8RTWauP0zJHdfcEtpjUChE_ShvngVzUSB4MisleGnyZ1tLMzPv6lEpFBYz5rvTVfi0Z1D53Xx5tkUXEZ4p5ZIupykDwTTUtDi_t5yPzFNruaIgc27WeJFx30VEVniCZ1"
                    alt="Menu Page 2"
                    className="w-full shadow-2xl rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6cf4VfTOzb8PUKh4LW62kF6fTVoO5qRgxfe0EsjMznPNXGQTRr8CzVb_JuIqErHY4KQ-ynXGKWsRLTwRLKtEWZ4mKkT7NgWCCCYMFsOQ-Bso1fsuVnRxGI-0wJy3LkJXIXNUJ-6MEVbe--AplyOXucw1cRjPSKZC2ksxHZmmWYtKZzLUYRtzv4qTukxd1bbrX01no-wlkhdshfiGUU5UWCEfaOynoLGPnGLaBAe5A4gGyy5iKNNhXSrxgHC_63I8Cx_bDUWiz-z7a"
                    alt="Special Fried Rice"
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuJy3GjjN2Gpn7Ig7NuUzSULHrmbHKpeSlvAcrwRAGoKoUjjf7Esttu0HDmmZ-381XcI9X_yAORX-a9cuzvBBbbO-0fYl0VWF76Ju04Z2fteJPV6f63aXuDBdo3IJehBsediQugya6MtniXCiPi7d_7gmZ9TkAnSNbMp-WNPffTo9cLeJwR_hiFfoDlUwLG_pjTbHGby53rLl59_Puh1vDlTKjSCsngrrEmYFB2KQfrfNRq3AgxR6hq1rDNBq-WTNh9UqP2Mp-ZWDp"
                    alt="Wonton Soup"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
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
                  <button className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-xl font-black uppercase italic tracking-tighter hover:bg-stone-100 transition-colors">
                    Call Us Now
                  </button>
                </div>
              </div>
              <div className="lg:w-1/3 h-64 lg:h-auto relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc2raTufXA11AgqqH7aMGCSXHInclMWFB8KIBBhmGcMhHjiwa42n9WqicPTV-jRLkJsY3uPlPBF0VV991k5jeyX8pnKZzuG0G3cclKD2HXqrCMYagpywdaPD6FPPKfX0-L57mBUJFr8BDImN-jgjj9x4zT5mdV-AVdR_43OmxuLBUzleMHQhwlZ1w8bHFjXacZSA16J-txyntr1cDWexBPsGowUly3dSLhJUPBCqt1vfZzEiAUgNYSFYSMFX5rSkG9tCs9LIq_W6Mj"
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
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8dLXhl4S9YgqlIs8orXSDifs_PYkWB21r9hyR5TJELripHYKLDtM0bGL3xY84uMGLn0mCaltG_SxpfGTqtOkib6sG02i2plzdiYZjydQDLpJdiFuNPPq0M13QGYWpEgr83fqRC3cpEEKB3W0h5co7UFvvLpLIf3H1oDX5IUAvW-QHMeyOQiZentppoB4NdSeWcj_EmBtBjEXflKRFqmf8MKH5OS9oF9aRjLyKMrsFB3jcOKhMAohzxokAIqAn392RUDIHIiOKh7ri"
                  alt="Map location"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
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
