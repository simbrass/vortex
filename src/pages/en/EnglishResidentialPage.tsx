import { EnglishNavigation } from '@/components/EnglishNavigation';
import { EnglishFooter } from '@/components/EnglishFooter';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Code Compliance (CMEQ)',
    description: 'Replacement of obsolete panels, circuit updates, and complete certification for your family\'s safety.',
    image: '/residential_panel.jpg',
    features: ['Full Inspection', 'CMEQ Report', '5-Year Warranty'],
  },
  {
    title: 'Lighting Installation',
    description: 'Indoor and outdoor LED lighting, decorative fixtures, landscape lighting, and energy-efficient solutions.',
    image: '/residential_lighting.jpg',
    features: ['Custom LED', 'Smart Lighting', 'Energy Savings'],
  },
  {
    title: 'Residential Renovation',
    description: 'Complete services for kitchen, bathroom, basement renovations, and room additions.',
    image: '/service_reno.jpg',
    features: ['Triplex & Duplex', 'New Condos', 'Heritage Homes'],
  },
  {
    title: 'EV Charging Stations',
    description: 'Home electric vehicle charging station installation with subsidy assistance.',
    image: '/ev_charger_hero.jpg',
    features: ['Level 2 (240V)', '1-Day Installation', 'All Brands'],
  },
];

const testimonials = [
  { name: 'Marie-Claire B.', location: 'Rosemont', text: 'Excellent experience! Our duplex code compliance was done quickly and cleanly.', rating: 5 },
  { name: 'Pierre L.', location: 'Villeray', text: 'Perfect LED lighting installation. The team was professional and respectful.', rating: 5 },
  { name: 'Sophie T.', location: 'Mile End', text: 'Tesla charger installed in one day. Very satisfied with the service and explanations.', rating: 5 },
];

export function EnglishResidentialPage() {
  return (
    <div className="relative w-full min-h-screen bg-off-white">
      <EnglishNavigation />
      
      <main>
        <PageHero
          title="Residential Electrical Services"
          subtitle="For Your Home"
          description="Complete electrical services for houses, condos, triplexes, and duplexes throughout Greater Montreal. Clean, guaranteed work compliant with CMEQ standards."
          image="/hero_electrician.jpg"
          ctaText="Request a Quote"
          ctaLink="/en/contact"
          ctaSecondaryText="24/7 Emergency"
          ctaSecondaryLink="tel:5145550142"
        />

        <section className="py-16 lg:py-24 grain-overlay">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">Our Services</span>
              <h2 className="font-display font-bold text-navy text-display-2">Electrical Solutions for Your Home</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service) => (
                <div key={service.title} className="group bg-white rounded-[28px] overflow-hidden border border-navy/8 card-shadow hover:shadow-card-hover transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="font-display font-bold text-navy text-xl mb-3 group-hover:text-copper transition-colors">{service.title}</h3>
                    <p className="text-gray leading-relaxed mb-5">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span key={feature} className="inline-flex items-center gap-1.5 text-navy/70 text-sm bg-off-white px-3 py-1.5 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5 text-copper" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">Testimonials</span>
              <h2 className="font-display font-bold text-navy text-display-2">What Our Clients Say</h2>
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
              <h2 className="font-display font-bold text-white text-display-2 mb-4">Ready to Start Your Project?</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">Contact us today for a free quote. We serve all of Greater Montreal.</p>
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
