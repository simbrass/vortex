import { EnglishNavigation } from '@/components/EnglishNavigation';
import { EnglishFooter } from '@/components/EnglishFooter';
import { PageHero } from '@/components/PageHero';
import { Award, Shield, Users, Clock, CheckCircle2, Star } from 'lucide-react';

const stats = [
  { value: '+12', label: 'Years of Experience', icon: Clock },
  { value: '5000+', label: 'Projects Completed', icon: CheckCircle2 },
  { value: '98%', label: 'Satisfied Clients', icon: Star },
  { value: '15', label: 'Certified Electricians', icon: Users },
];

const values = [
  { title: 'Safety First', description: 'Every installation strictly follows CMEQ standards and Quebec electrical codes.' },
  { title: 'Transparency', description: 'Detailed quotes with no surprises. We explain every step before starting.' },
  { title: 'Clean Work', description: 'We leave your property as clean as we found it.' },
  { title: 'Local Service', description: 'Based in Montreal, we know the unique characteristics of metropolitan buildings.' },
];

export function EnglishAboutPage() {
  return (
    <div className="relative w-full min-h-screen bg-off-white">
      <EnglishNavigation />
      
      <main>
        <PageHero
          title="About Voltex"
          subtitle="Our Story"
          description="For over 12 years, we've been providing top-quality electrical services to residents and businesses throughout Greater Montreal."
          image="/team_photo.jpg"
        />

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
                    <div className="font-display font-bold text-white text-3xl lg:text-4xl mb-1">{stat.value}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 grain-overlay">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="lg:w-1/2">
                <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">Our Story</span>
                <h2 className="font-display font-bold text-navy text-display-2 mb-6">
                  A Family Business Serving Montreal
                </h2>
                <div className="space-y-4 text-gray leading-relaxed">
                  <p>
                    Founded in 2012 by Marc-André Lefebvre, Voltex Électrique was born from a simple vision: to provide professional electrical services with a personal, local approach.
                  </p>
                  <p>
                    What started as a small family business is now a team of 15 certified electricians, all passionate about their craft and dedicated to customer satisfaction.
                  </p>
                  <p>
                    We've had the privilege of working on thousands of projects across Greater Montreal, from heritage homes in the Plateau to modern downtown condos and large-scale commercial projects.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <img src="/team_photo.jpg" alt="The Voltex Électrique Team" className="w-full rounded-[28px] card-shadow" />
                  <div className="absolute -bottom-6 -right-6 bg-copper rounded-[20px] p-6 hidden lg:block">
                    <div className="font-display font-bold text-white text-4xl">12+</div>
                    <div className="text-white/80 text-sm">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">Our Values</span>
              <h2 className="font-display font-bold text-navy text-display-2">What Guides Us Every Day</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div key={value.title} className="bg-off-white rounded-[28px] p-6 lg:p-8 border border-navy/8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-copper/10 rounded-xl flex items-center justify-center">
                      <span className="font-display font-bold text-copper">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-display font-bold text-navy text-lg">{value.title}</h3>
                  </div>
                  <p className="text-gray leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 grain-overlay">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="bg-navy rounded-[28px] p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="lg:w-1/2">
                  <h2 className="font-display font-bold text-white text-display-2 mb-4">Certified & Insured</h2>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Your safety is our absolute priority. That's why we maintain all required certifications and comprehensive liability insurance.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-white/80"><Award className="w-5 h-5 text-copper" /><span>Valid CMEQ License</span></div>
                    <div className="flex items-center gap-3 text-white/80"><Shield className="w-5 h-5 text-copper" /><span>$2M Liability Insurance</span></div>
                    <div className="flex items-center gap-3 text-white/80"><CheckCircle2 className="w-5 h-5 text-copper" /><span>Mandatory Continuing Education</span></div>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <Award className="w-10 h-10 text-copper mx-auto mb-3" />
                      <div className="text-white font-semibold text-sm">CMEQ</div>
                      <div className="text-white/50 text-xs">License C-12345</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <Shield className="w-10 h-10 text-copper mx-auto mb-3" />
                      <div className="text-white font-semibold text-sm">RBQ</div>
                      <div className="text-white/50 text-xs">0000-0000-01</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <CheckCircle2 className="w-10 h-10 text-copper mx-auto mb-3" />
                      <div className="text-white font-semibold text-sm">CVC</div>
                      <div className="text-white/50 text-xs">Verified</div>
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

      <EnglishFooter />
    </div>
  );
}
