import { PageNavigation } from '@/components/PageNavigation';
import { PageFooter } from '@/components/PageFooter';
import { PageHero } from '@/components/PageHero';
import { Award, Shield, Users, Clock, CheckCircle2, Star } from 'lucide-react';

const stats = [
  { value: '+12', label: "Années d'expérience", icon: Clock },
  { value: '5000+', label: 'Projets complétés', icon: CheckCircle2 },
  { value: '98%', label: 'Clients satisfaits', icon: Star },
  { value: '15', label: 'Électriciens certifiés', icon: Users },
];

const values = [
  {
    title: 'Sécurité avant tout',
    description: 'Chaque installation respecte strictement les normes CMEQ et les codes électriques du Québec.',
  },
  {
    title: 'Transparence',
    description: 'Devis détaillés sans surprise. On explique chaque étape avant de commencer.',
  },
  {
    title: 'Travail propre',
    description: 'Nous laissons votre propriété aussi propre que nous l\'avons trouvée.',
  },
  {
    title: 'Service local',
    description: 'Basés à Montréal, nous connaissons les particularités des bâtiments de la métropole.',
  },
];

export function AboutPage() {
  return (
    <div className="relative w-full min-h-screen bg-off-white">
      <PageNavigation />
      
      <main>
        <PageHero
          title="À propos de Voltex"
          subtitle="Notre histoire"
          description="Depuis plus de 12 ans, nous fournissons des services électriques de qualité supérieure aux résidents et entreprises du Grand Montréal."
          image="/team_photo.jpg"
        />

        {/* Stats Section */}
        <section className="py-12 lg:py-16 bg-navy">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-copper/20 rounded-xl mb-4">
                      <Icon className="w-6 h-6 text-copper" />
                    </div>
                    <div className="font-display font-bold text-white text-3xl lg:text-4xl mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-sm">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24 grain-overlay">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="lg:w-1/2">
                <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">
                  Notre histoire
                </span>
                <h2 className="font-display font-bold text-navy text-display-2 mb-6">
                  Une entreprise familiale au service de Montréal
                </h2>
                <div className="space-y-4 text-gray leading-relaxed">
                  <p>
                    Fondée en 2012 par Marc-André Lefebvre, Voltex Électrique est née d'une vision simple : offrir des services électriques professionnels avec une approche personnelle et locale.
                  </p>
                  <p>
                    Ce qui a commencé comme une petite entreprise familiale est aujourd'hui une équipe de 15 électriciens certifiés, tous passionnés par leur métier et dévoués à la satisfaction de nos clients.
                  </p>
                  <p>
                    Nous avons eu le privilège de travailler sur des milliers de projets à travers le Grand Montréal, des maisons ancestrales du Plateau aux condos modernes du centre-ville, en passant par des projets commerciaux d'envergure.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <img
                    src="/team_photo.jpg"
                    alt="L'équipe Voltex Électrique"
                    className="w-full rounded-[28px] card-shadow"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-copper rounded-[20px] p-6 hidden lg:block">
                    <div className="font-display font-bold text-white text-4xl">12+</div>
                    <div className="text-white/80 text-sm">Années d'excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">
                Nos valeurs
              </span>
              <h2 className="font-display font-bold text-navy text-display-2">
                Ce qui nous guide chaque jour
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-off-white rounded-[28px] p-6 lg:p-8 border border-navy/8"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-copper/10 rounded-xl flex items-center justify-center">
                      <span className="font-display font-bold text-copper">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-navy text-lg">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 lg:py-24 grain-overlay">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="bg-navy rounded-[28px] p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="lg:w-1/2">
                  <h2 className="font-display font-bold text-white text-display-2 mb-4">
                    Certifiés et assurés
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Votre sécurité est notre priorité absolue. C'est pourquoi nous maintenons toutes les certifications requises et une assurance responsabilité civile complète.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-white/80">
                      <Award className="w-5 h-5 text-copper" />
                      <span>Licence CMEQ valide</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <Shield className="w-5 h-5 text-copper" />
                      <span>Assurance responsabilité civile de 2M$</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-copper" />
                      <span>Formation continue obligatoire</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <Award className="w-10 h-10 text-copper mx-auto mb-3" />
                      <div className="text-white font-semibold text-sm">CMEQ</div>
                      <div className="text-white/50 text-xs">Licence C-12345</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <Shield className="w-10 h-10 text-copper mx-auto mb-3" />
                      <div className="text-white font-semibold text-sm">RBQ</div>
                      <div className="text-white/50 text-xs">1234-5678-90</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <CheckCircle2 className="w-10 h-10 text-copper mx-auto mb-3" />
                      <div className="text-white font-semibold text-sm">CVC</div>
                      <div className="text-white/50 text-xs">Vérifié</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <Star className="w-10 h-10 text-copper mx-auto mb-3" />
                      <div className="text-white font-semibold text-sm">BBB</div>
                      <div className="text-white/50 text-xs">A+ Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
}
