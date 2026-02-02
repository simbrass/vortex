import { Zap, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  services: [
    { label: 'Mise aux normes CMEQ', href: '/services/residentiel' },
    { label: 'Installation éclairage LED', href: '/services/residentiel' },
    { label: 'Rénovation résidentielle', href: '/services/residentiel' },
    { label: 'Bornes de recharge EV', href: '/services/borne-ev' },
    { label: 'Thermostats intelligents', href: '/services/residentiel' },
    { label: 'Services commerciaux', href: '/services/commercial' },
    { label: 'Panneaux électriques', href: '/services/residentiel' },
    { label: 'Dépannage 24/7', href: '/contact' },
  ],
  company: [
    { label: 'À propos', href: '/a-propos' },
    { label: 'Nos projets', href: '/#projets' },
    { label: 'Couverture', href: '/#couverture' },
    { label: 'Contact', href: '/contact' },
    { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
  ],
  locations: [
    { label: 'Plateau Mont-Royal', href: '/quartiers/plateau-mont-royal' },
    { label: 'Mile End', href: '/#couverture' },
    { label: 'Rosemont', href: '/#couverture' },
    { label: 'Griffintown', href: '/#couverture' },
    { label: 'Villeray', href: '/#couverture' },
    { label: 'Petite-Italie', href: '/#couverture' },
    { label: 'Centre-ville', href: '/#couverture' },
    { label: 'Rive-Sud', href: '/#couverture' },
    { label: 'Rive-Nord', href: '/#couverture' },
  ],
};

export function PageFooter() {
  return (
    <footer className="w-full bg-navy text-white">
      <div className="w-full px-6 lg:px-[6vw] py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-copper rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl">Voltex</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Électriciens certifiés CMEQ serving le Grand Montréal. Travail propre, conforme et durable depuis plus de 12 ans.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:5145550142"
                className="flex items-center gap-3 text-white/70 hover:text-copper transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">(514) 555-0142</span>
              </a>
              <a
                href="mailto:bonjour@voltexelectrique.ca"
                className="flex items-center gap-3 text-white/70 hover:text-copper transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">bonjour@voltexelectrique.ca</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Grand Montréal, QC</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-copper transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-5">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-copper transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-5">
              Quartiers
            </h4>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-copper transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Voltex Électrique Montréal. Tous droits réservés.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-copper transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-copper transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-copper transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-white/40 text-sm">
            <span>Licence CMEQ</span>
            <span>•</span>
            <span>RBQ: 0000-0000-01</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
