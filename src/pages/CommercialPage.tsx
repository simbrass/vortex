import { PageNavigation } from '@/components/PageNavigation';
import { PageFooter } from '@/components/PageFooter';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Building2, Store, Warehouse, Lightbulb, ArrowRight, Phone, Star, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Bureaux et immeubles',
    description: 'Installations électriques complètes pour bureaux, rénovations et mises aux normes pour immeubles commerciaux.',
    icon: Building2,
    features: ['Éclairage LED commercial', 'Mise aux normes', 'Tableaux électriques'],
  },
  {
    title: 'Commerce de détail',
    description: 'Solutions électriques pour magasins, boutiques et centres commerciaux. Éclairage attractif et fonctionnel.',
    icon: Store,
    features: ['Éclairage vitrine', 'Systèmes de sécurité', 'Bornes EV clients'],
  },
  {
    title: 'Industriel et entrepôts',
    description: 'Services électriques pour installations industrielles, entrepôts et centres de distribution.',
    icon: Warehouse,
    features: ['Haute tension', 'Éclairage industriel', 'Systèmes de backup'],
  },
  {
    title: 'Restaurants et cafés',
    description: 'Installations électriques pour la restauration, conformes aux normes sanitaires et de sécurité.',
    icon: Lightbulb,
    features: ['Cuisine commerciale', 'Éclairage ambiance', 'Ventilation'],
  },
];

const clients = [
  'Bureaux à louer',
  'Centres commerciaux',
  'Restaurants',
  'Hôtels',
  'Entrepôts',
  'Cliniques',
  'Écoles',
  'Immeubles à condos',
];

const testimonials = [
  {
    name: 'Jean-François M.',
    company: 'Gestion Immobilière MTL',
    text: 'Voltex gère tous nos immeubles commerciaux. Service fiable, rapide et professionnel.',
    rating: 5,
  },
  {
    name: 'Amanda L.',
    company: 'Café Saint-Henri',
    text: 'Installation parfaite pour notre café. L\'équipe a travaillé en dehors des heures d\'ouverture.',
    rating: 5,
  },
  {
    name: 'Robert K.',
    company: 'Entrepôt Logistique Plus',
    text: 'Excellente expertise pour notre mise aux normes industrielle. Travail impeccable.',
    rating: 5,
  },
];

export function CommercialPage() {
  return (
    <div className="relative w-full min-h-screen bg-off-white">
      <PageNavigation />
      
      <main>
        <PageHero
          title="Services électriques commerciaux"
          subtitle="Pour votre entreprise"
          description="Solutions électriques professionnelles pour bureaux, commerces, restaurants et installations industrielles dans le Grand Montréal."
          image="/commercial_building.jpg"
          ctaText="Demander une consultation"
          ctaLink="/contact"
          ctaSecondaryText="Urgence 24/7"
          ctaSecondaryLink="tel:5145550142"
        />

        {/* Services Grid */}
        <section className="py-16 lg:py-24 grain-overlay">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">
                Nos services commerciaux
              </span>
              <h2 className="font-display font-bold text-navy text-display-2">
                Solutions pour tous types d'entreprises
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group bg-white rounded-[28px] p-6 lg:p-8 border border-navy/8 card-shadow hover:shadow-card-hover transition-all duration-500"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-copper/10 rounded-2xl mb-5">
                      <Icon className="w-7 h-7 text-copper" />
                    </div>
                    <h3 className="font-display font-bold text-navy text-xl mb-3 group-hover:text-copper transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 text-navy/70 text-sm bg-off-white px-3 py-1.5 rounded-full"
                        >
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

        {/* Clients Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <img
                  src="/commercial_retail.jpg"
                  alt="Installation électrique commerciale"
                  className="w-full rounded-[28px] card-shadow"
                />
              </div>
              <div className="lg:w-1/2">
                <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">
                  Types de clients
                </span>
                <h2 className="font-display font-bold text-navy text-display-2 mb-6">
                  Nous servons tous types d'entreprises
                </h2>
                <p className="text-gray leading-relaxed mb-8">
                  De la petite boutique au grand immeuble de bureaux, nous avons l'expertise nécessaire pour répondre à vos besoins électriques commerciaux.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {clients.map((client) => (
                    <div
                      key={client}
                      className="flex items-center gap-2 text-navy"
                    >
                      <CheckCircle2 className="w-4 h-4 text-copper flex-shrink-0" />
                      <span className="text-sm">{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 grain-overlay">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="bg-navy rounded-[28px] p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">
                    Avantages
                  </span>
                  <h2 className="font-display font-bold text-white text-display-2 mb-6">
                    Pourquoi les entreprises nous choisissent
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-8">
                    Nous comprenons que chaque minute d'arrêt coûte de l'argent. C'est pourquoi nous offrons un service rapide, fiable et adapté à vos horaires d'affaires.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-copper/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-copper" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Intervention rapide</h4>
                        <p className="text-white/60 text-sm">Délai moyen de 24h pour les appels non urgents</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-copper/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-copper" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Service 24/7</h4>
                        <p className="text-white/60 text-sm">Disponibles pour les urgences à tout moment</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-copper/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-copper" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Horaires flexibles</h4>
                        <p className="text-white/60 text-sm">Travail en dehors des heures d'ouverture si nécessaire</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <img
                    src="/commercial_electrical.jpg"
                    alt="Salle électrique commerciale"
                    className="w-full rounded-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">
                Témoignages
              </span>
              <h2 className="font-display font-bold text-navy text-display-2">
                Ce que disent nos clients commerciaux
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-off-white rounded-[28px] p-6 lg:p-8"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-copper text-copper" />
                    ))}
                  </div>
                  <p className="text-navy/80 leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-navy">{testimonial.name}</div>
                    <div className="text-gray text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="bg-copper rounded-[28px] p-8 lg:p-12 text-center">
              <h2 className="font-display font-bold text-white text-display-2 mb-4">
                Parlons de votre projet commercial
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                Contactez-nous pour une consultation gratuite. Nous évaluerons vos besoins et vous proposerons une solution adaptée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-white text-copper hover:bg-white/90 font-semibold px-8 py-4 rounded-xl">
                    Demander une consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="tel:5145550142">
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    (514) 555-0142
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
}
