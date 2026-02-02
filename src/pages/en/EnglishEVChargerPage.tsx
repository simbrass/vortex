import { EnglishNavigation } from '@/components/EnglishNavigation';
import { EnglishFooter } from '@/components/EnglishFooter';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Zap, Clock, Shield, DollarSign, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  { title: 'Fast Charging', description: 'Charge your vehicle up to 8 times faster than with a standard outlet.', icon: Zap },
  { title: '1-Day Installation', description: 'Most installations are completed in a single day.', icon: Clock },
  { title: '5-Year Warranty', description: 'All our EV charger installations are guaranteed for 5 years.', icon: Shield },
  { title: 'Subsidies Available', description: 'We help you obtain government subsidies.', icon: DollarSign },
];

const faqs = [
  {
    question: 'Which EV charger should I choose?',
    answer: 'The choice depends on your vehicle and needs. We generally recommend Level 2 (240V) chargers that offer 4 to 8 times faster charging than a standard outlet. We can advise you on the best options for your budget.',
  },
  {
    question: 'Is my electrical panel sufficient?',
    answer: 'During our free evaluation, we check your panel\'s capacity. In most cases, a Level 2 EV charger requires a dedicated 40A circuit. If updates are needed, we\'ll inform you in the quote.',
  },
  {
    question: 'What subsidies are available?',
    answer: 'Several subsidies are available in Quebec, including the Roulez vert program which offers up to $600 for residential charging station installation. We help you complete the applications.',
  },
  {
    question: 'How much does installation cost?',
    answer: 'Cost varies depending on installation complexity and distance between your panel and charger location. On average, expect $800 to $2,000 for a standard installation, before subsidies.',
  },
];

export function EnglishEVChargerPage() {
  return (
    <div className="relative w-full min-h-screen bg-off-white">
      <EnglishNavigation />
      
      <main>
        <PageHero
          title="EV Charging Station Installation"
          subtitle="Specialized Service"
          description="Install a home charging station and enjoy fast, safe, and economical charging for your electric vehicle."
          image="/ev_charger_hero.jpg"
          ctaText="Request a Free Quote"
          ctaLink="/en/contact"
          ctaSecondaryText="Call Us"
          ctaSecondaryLink="tel:5145550142"
        />

        <section className="py-16 lg:py-24 grain-overlay">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">Why Choose Voltex</span>
              <h2 className="font-display font-bold text-navy text-display-2">EV Charging Expertise in Montreal</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="bg-white rounded-[28px] p-6 lg:p-8 border border-navy/8 card-shadow text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-copper/10 rounded-2xl mb-5">
                      <Icon className="w-7 h-7 text-copper" />
                    </div>
                    <h3 className="font-display font-bold text-navy text-lg mb-3">{benefit.title}</h3>
                    <p className="text-gray text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">FAQ</span>
                <h2 className="font-display font-bold text-navy text-display-2">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-off-white rounded-[20px] p-6">
                    <h3 className="font-display font-semibold text-navy text-lg mb-3">{faq.question}</h3>
                    <p className="text-gray leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="bg-navy rounded-[28px] p-8 lg:p-12 text-center">
              <h2 className="font-display font-bold text-white text-display-2 mb-4">Ready to Go Electric?</h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">Contact us today for a free evaluation of your installation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/en/contact">
                  <Button className="bg-copper hover:bg-copper/90 text-white font-semibold px-8 py-4 rounded-xl">
                    Request a Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="tel:5145550142">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl">
                    <Phone className="w-4 h-4 mr-2" />
                    (514) 555-0142
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <EnglishFooter />
    </div>
  );
}
