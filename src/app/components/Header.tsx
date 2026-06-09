import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  navigateToPage: (page: string) => void;
}

export function Header({ currentPage, navigateToPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we should show white text (only on home page when not scrolled)
  const isHomePage = currentPage === 'home';
  const showWhiteText = isHomePage && !isScrolled;

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Services', page: 'services' },
    { name: 'About', page: 'about' },
    { name: 'Portfolio', page: 'portfolio' },
    { name: 'Contact', page: 'contact' },
  ];

  const getHrefForPage = (page: string) => {
    return page === 'home' ? '/' : `/${page}`;
  };

  const handleNavClick = (page: string) => {
    navigateToPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnchorNavClick = (event: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    event.preventDefault();
    handleNavClick(page);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => handleNavClick('home')} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className={`font-semibold text-lg transition-colors ${
              showWhiteText ? 'text-white' : 'text-gray-900'
            }`}>ArtBoat Digital</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.page}
                href={getHrefForPage(item.page)}
                onClick={(event) => handleAnchorNavClick(event, item.page)}
                className={`relative transition-colors ${
                  showWhiteText
                    ? currentPage === item.page
                      ? 'text-white font-semibold'
                      : 'text-white/90 hover:text-white'
                    : currentPage === item.page
                      ? 'text-purple-600'
                      : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {item.name}
                {currentPage === item.page && (
                  <motion.div
                    layoutId="underline"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      showWhiteText ? 'bg-white' : 'bg-purple-600'
                    }`}
                  />
                )}
              </a>
            ))}
          </nav>

          <button
            onClick={() => handleNavClick('contact')}
            className="hidden md:block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              showWhiteText ? 'text-white' : 'text-gray-900'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t"
        >
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.page}
                href={getHrefForPage(item.page)}
                onClick={(event) => handleAnchorNavClick(event, item.page)}
                className={`p-2 text-left ${
                  currentPage === item.page
                    ? 'text-purple-600'
                    : 'text-gray-600'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href={getHrefForPage('contact')}
              onClick={(event) => handleAnchorNavClick(event, 'contact')}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-lg text-center"
            >
              Get Started
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}