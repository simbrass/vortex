import { EnglishNavigation } from '@/components/EnglishNavigation';
import { EnglishFooter } from '@/components/EnglishFooter';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Building2, Store, Warehouse, Lightbulb, ArrowRight, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Offices & Buildings',
    description: 'Complete electrical installations for offices, renovations, and code compliance upgrades for commercial buildings.',
    icon: Building2,
    features: ['Commercial LED Lighting', 'Code Compliance', 'Electrical Panels'],
  },
  {
    title: 'Retail Stores',
    description: 'Electrical solutions for shops, boutiques, and shopping centers. Attractive and functional lighting.',
    icon: Store,
    features: ['Display Lighting', 'Security Systems', 'Customer EV Chargers'],
  },
  {
    title: 'Industrial & Warehouses',
    description: 'Electrical services for industrial facilities, warehouses, and distribution centers.',
    icon: Warehouse,
    features: ['High Voltage', 'Industrial Lighting', 'Backup Systems'],
  },
  {
    title: 'Restaurants & Cafés',
    description: 'Electrical installations for restaurants, compliant with health and safety standards.',
    icon: Lightbulb,
    features: ['Commercial Kitchen', 'Ambient Lighting', 'Ventilation'],
  },
];

const testimonials = [
  { name: 'Jean-François M.', company: 'MTL Property Management', text: 'Voltex manages all our commercial buildings. Reliable, fast, and professional service.', rating: 5 },
  { name: 'Amanda L.', company: 'Café Saint-Henri', text: 'Perfect installation for our café. The team worked outside business hours.', rating: 5 },
  { name: 'Robert K.', company: 'Logistique Plus Warehouse', text: 'Excellent expertise for our industrial code compliance. Impeccable work.', rating: 5 },
];

export function EnglishCommercialPage() {
  return (
    <div className="relative w-full min-h-screen bg-off-white">
      <EnglishNavigation />
      
      <main>
        <PageHero
          title="Commercial Electrical Services"
          subtitle="For Your Business"
          description="Professional electrical solutions for offices, retail, restaurants, and industrial facilities throughout Greater Montreal."
          image="/commercial_building.jpg"
          ctaText="Request a Consultation"
          ctaLink="/en/contact"
          ctaSecondaryText="24/7 Emergency"
          ctaSecondaryLink="tel:5145550142"
        />

        <section className="py-16 lg:py-24 grain-overlay">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">Our Commercial Services</span>
              <h2 className="font-display font-bold text-navy text-display-2">Solutions for All Business Types</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="group bg-white rounded-[28px] p-6 lg:p-8 border border-navy/8 card-shadow hover:shadow-card-hover transition-all duration-500">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-copper/10 rounded-2xl mb-5">
                      <Icon className="w-7 h-7 text-copper" />
                    </div>
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
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">Testimonials</span>
              <h2 className="font-display font-bold text-navy text-display-2">What Our Commercial Clients Say</h2>
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
                    <div className="text-gray text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="bg-copper rounded-[28px] p-8 lg:p-12 text-center">
              <h2 className="font-display font-bold text-white text-display-2 mb-4">Let's Discuss Your Commercial Project</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">Contact us for a free consultation. We'll assess your needs and propose a tailored solution.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/en/contact">
                  <Button className="bg-white text-copper hover:bg-white/90 font-semibold px-8 py-4 rounded-xl">
                    Request a Consultation
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
