import { EnglishNavigation } from '@/components/EnglishNavigation';
import { EnglishFooter } from '@/components/EnglishFooter';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { MapPin, Home, Building2, CheckCircle2, ArrowRight, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  'Code compliance for triplexes and duplexes',
  'Complete electrical renovation',
  'LED lighting installation',
  'EV charging stations',
  'Electrical panel upgrades',
  'Smart thermostats',
];

const testimonials = [
  { name: 'Sarah L.', location: 'Avenue du Mont-Royal', text: 'Punctual team, spotless site at the end. They perfectly handled the specifics of our old triplex.', rating: 5 },
  { name: 'Michel T.', location: 'Rue Saint-Denis', text: 'Impeccable work in our Plateau condo. On time and on budget. Highly recommended.', rating: 5 },
  { name: 'Emma R.', location: 'Boulevard Saint-Laurent', text: 'Tesla charger installed perfectly. The team knows the constraints of Plateau buildings well.', rating: 5 },
];

export function EnglishPlateauPage() {
  return (
    <div className="relative w-full min-h-screen bg-off-white">
      <EnglishNavigation />
      
      <main>
        <PageHero
          title="Electrician Plateau Mont-Royal"
          subtitle="Neighborhood Service"
          description="Specialized electrical service for triplexes, duplexes, and condos in Plateau Mont-Royal. We know the specifics of your buildings."
          image="/plateau_hero.jpg"
          ctaText="Request a Quote"
          ctaLink="/en/contact"
          ctaSecondaryText="24/7 Emergency"
          ctaSecondaryLink="tel:5145550142"
        />

        <section className="py-16 lg:py-24 grain-overlay">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="lg:w-1/2">
                <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">Le Plateau Mont-Royal</span>
                <h2 className="font-display font-bold text-navy text-display-2 mb-6">Your Trusted Electrician in the Plateau</h2>
                <div className="space-y-4 text-gray leading-relaxed">
                  <p>
                    Plateau Mont-Royal is one of Montreal's most iconic neighborhoods, with its colorful row houses, characteristic outdoor staircases, and unique early 20th-century architecture.
                  </p>
                  <p>
                    At Voltex, we understand the specific electrical challenges of Plateau buildings. From obsolete electrical systems to necessary code compliance upgrades for triplexes and duplexes, we have the expertise to handle all types of projects in this historic neighborhood.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img src="/quartier_plateau.jpg" alt="Colorful Plateau Mont-Royal houses" className="w-full rounded-[28px] card-shadow" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">Our Services</span>
              <h2 className="font-display font-bold text-navy text-display-2">Electrical Services for the Plateau</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service} className="flex items-start gap-4 bg-off-white rounded-[20px] p-6">
                  <div className="w-10 h-10 bg-copper/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-copper" />
                  </div>
                  <span className="text-navy font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 grain-overlay">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="bg-navy rounded-[28px] p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                  <h2 className="font-display font-bold text-white text-display-2 mb-6">Why Choose Voltex in the Plateau?</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-copper/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Home className="w-6 h-6 text-copper" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Local Expertise</h3>
                        <p className="text-white/60 text-sm">We know the specifics of Plateau buildings.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-copper/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-copper" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Heritage Respect</h3>
                        <p className="text-white/60 text-sm">We preserve the architectural integrity of your property.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-copper/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-copper" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Fast Response</h3>
                        <p className="text-white/60 text-sm">Quick service throughout the Plateau neighborhood.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white/5 backdrop-blur-sm rounded-[20px] p-6 lg:p-8">
                    <h3 className="font-display font-semibold text-white text-lg mb-4">Nearby Areas</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Mile End', 'Rosemont', 'Villeray', 'Petite-Italie', 'Downtown', 'Latin Quarter'].map((area) => (
                        <span key={area} className="bg-copper/20 text-copper text-sm px-3 py-1.5 rounded-full">{area}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">Testimonials</span>
              <h2 className="font-display font-bold text-navy text-display-2">What Our Plateau Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-off-white rounded-[28px] p-6 lg:p-8">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-copper text-copper" />
                    ))}
                  </div>
                  <p className="text-navy/80 leading-relaxed mb-6">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-navy">{testimonial.name}</div>
                    <div className="text-gray text-sm">{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="bg-copper rounded-[28px] p-8 lg:p-12 text-center">
              <h2 className="font-display font-bold text-white text-display-2 mb-4">Need an Electrician in the Plateau?</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">Contact us for a free quote. We serve the entire Plateau Mont-Royal neighborhood.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/en/contact">
                  <Button className="bg-white text-copper hover:bg-white/90 font-semibold px-8 py-4 rounded-xl">
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
