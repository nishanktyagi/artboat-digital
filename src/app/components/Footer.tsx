import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xl">A</span>
              </div>
              <span className="font-semibold text-lg">ArtBoat Digital</span>
            </div>
            <p className="text-purple-200 mb-4">
              Navigate your brand to success with creative digital marketing solutions that make waves in your industry.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1E4KpM5hnR/" className="hover:text-purple-300 transition-colors">
                <Facebook size={20} />
              </a>
              {/* <a href="#" className="hover:text-purple-300 transition-colors">
                <Twitter size={20} />
              </a> */}
              <a href="https://www.instagram.com/artboatdigital/" className="hover:text-purple-300 transition-colors">
                <Instagram size={20} />
              </a>
              {/* <a href="#" className="hover:text-purple-300 transition-colors">
                <Linkedin size={20} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavClick('home')} className="text-purple-200 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="text-purple-200 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="text-purple-200 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('portfolio')} className="text-purple-200 hover:text-white transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="text-purple-200 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-purple-200">
              <li>Branding & Identity</li>
              <li>Web Design & Development</li>
              <li>E-commerce Solutions</li>
              <li>Social Media Marketing</li>
              <li>Video Production</li>
              <li>Paid Advertising</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-purple-200">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>WeWork Galaxy Business Park, Sector 62, A-44, Sushil Marg, Block A, Industrial Area, Noida, UP 201309</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="flex-shrink-0" />
                <span>+91 6393754583</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="flex-shrink-0" />
                <span>artboatdigital@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-8 text-center text-purple-200">
          <p>© 2025 ArtBoat Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}