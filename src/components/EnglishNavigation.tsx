import { useState, useEffect } from 'react';
import { Phone, Menu, X, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/en' },
  { label: 'Residential', href: '/en/services/residential' },
  { label: 'Commercial', href: '/en/services/commercial' },
  { label: 'About', href: '/en/about' },
  { label: 'Contact', href: '/en/contact' },
];

export function EnglishNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/en') {
      return location.pathname === '/en';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-navy/95 backdrop-blur-md py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-6 lg:px-[6vw]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/en" className="flex items-center gap-2 group">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                isScrolled ? 'bg-copper' : 'bg-white/10 backdrop-blur-sm'
              }`}>
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                Voltex
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-all hover:opacity-80 ${
                    isActive(link.href) ? 'text-copper' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                <Globe className="w-4 h-4" />
                FR
              </Link>
              <a href="tel:5145550142">
                <Button className="bg-copper hover:bg-copper/90 text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-copper/25 transition-all hover:shadow-xl hover:shadow-copper/30 hover:-translate-y-0.5">
                  <Phone className="w-4 h-4 mr-2" />
                  24/7 Emergency
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-navy/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-display font-semibold transition-colors ${
                isActive(link.href) ? 'text-copper' : 'text-white hover:text-copper'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/" className="flex items-center gap-3 text-white/80">
            <Globe className="w-5 h-5" />
            Français
          </Link>
          <a href="tel:5145550142" className="mt-8 flex items-center gap-3 text-white/80">
            <Phone className="w-5 h-5" />
            (514) 555-0142
          </a>
          <a href="tel:5145550142">
            <Button className="bg-copper hover:bg-copper/90 text-white font-semibold px-8 py-3 rounded-xl mt-4">
              <Phone className="w-4 h-4 mr-2" />
              24/7 Emergency
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
