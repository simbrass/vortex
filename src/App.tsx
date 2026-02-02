import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// French Pages
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { EVChargerPage } from './pages/EVChargerPage';
import { PlateauPage } from './pages/PlateauPage';
import { ResidentialPage } from './pages/ResidentialPage';
import { CommercialPage } from './pages/CommercialPage';
import { PrivacyPage } from './pages/PrivacyPage';

// English Pages
import { EnglishHomePage } from './pages/en/EnglishHomePage';
import { EnglishContactPage } from './pages/en/EnglishContactPage';
import { EnglishAboutPage } from './pages/en/EnglishAboutPage';
import { EnglishEVChargerPage } from './pages/en/EnglishEVChargerPage';
import { EnglishPlateauPage } from './pages/en/EnglishPlateauPage';
import { EnglishResidentialPage } from './pages/en/EnglishResidentialPage';
import { EnglishCommercialPage } from './pages/en/EnglishCommercialPage';
import { EnglishPrivacyPage } from './pages/en/EnglishPrivacyPage';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* French Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/services/borne-ev" element={<EVChargerPage />} />
        <Route path="/quartiers/plateau-mont-royal" element={<PlateauPage />} />
        <Route path="/services/residentiel" element={<ResidentialPage />} />
        <Route path="/services/commercial" element={<CommercialPage />} />
        <Route path="/politique-confidentialite" element={<PrivacyPage />} />

        {/* English Routes */}
        <Route path="/en" element={<EnglishHomePage />} />
        <Route path="/en/contact" element={<EnglishContactPage />} />
        <Route path="/en/about" element={<EnglishAboutPage />} />
        <Route path="/en/services/ev-charger" element={<EnglishEVChargerPage />} />
        <Route path="/en/areas/plateau-mont-royal" element={<EnglishPlateauPage />} />
        <Route path="/en/services/residential" element={<EnglishResidentialPage />} />
        <Route path="/en/services/commercial" element={<EnglishCommercialPage />} />
        <Route path="/en/privacy-policy" element={<EnglishPrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
