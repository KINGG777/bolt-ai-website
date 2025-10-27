import { Facebook, Instagram, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
              Maa Samaleswari
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Experience authentic Odia and Indian cuisine prepared with love and served with tradition.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-all hover:scale-110"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-300">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'menu', 'testimonials', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-gray-300 hover:text-orange-300 transition-colors capitalize"
                  >
                    {section === 'testimonials' ? 'Reviews' : section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-300">Opening Hours</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-semibold">8AM - 11PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-semibold">8AM - 11PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold">8AM - 11PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-300">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <p className="font-semibold text-white mb-1">Address</p>
                <p>Main Road, Sambalpur<br />Odisha 768001</p>
              </li>
              <li>
                <p className="font-semibold text-white mb-1">Phone</p>
                <p>+91 98765 43210</p>
              </li>
              <li>
                <p className="font-semibold text-white mb-1">Email</p>
                <p>info@maasamaleswari.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left">
              {currentYear} Maa Samaleswari Restaurant. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 fill-red-500 text-red-500" /> in Odisha
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
