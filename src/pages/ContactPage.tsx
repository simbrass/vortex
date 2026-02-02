import { useState } from 'react';
import { PageNavigation } from '@/components/PageNavigation';
import { PageFooter } from '@/components/PageFooter';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react';

export function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="relative w-full min-h-screen bg-off-white">
      <PageNavigation />
      
      <main>
        <PageHero
          title="Contactez-nous"
          subtitle="Nous sommes là pour vous aider"
          description="Besoin d'un devis ou d'une consultation? Remplissez le formulaire ci-dessous et nous vous répondrons sous 24 heures."
          image="/hero_electrician.jpg"
        />

        {/* Contact Section */}
        <section className="py-16 lg:py-24 grain-overlay">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Form Card */}
              <div className="flex-1 bg-white rounded-[28px] p-6 lg:p-10 border border-navy/8 card-shadow">
                <h2 className="font-display font-bold text-navy text-display-3 mb-2">
                  Demander une soumission
                </h2>
                <p className="text-gray text-sm lg:text-base mb-8">
                  Racontez-nous votre projet. On vous répond sous 24h.
                </p>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-display font-bold text-navy text-xl mb-2">
                      Message envoyé!
                    </h3>
                    <p className="text-gray">
                      Nous vous contacterons sous 24h.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-navy text-sm font-medium mb-2">
                          Nom complet *
                        </label>
                        <Input
                          type="text"
                          placeholder="Jean Tremblay"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-copper focus:ring-1 focus:ring-copper transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-navy text-sm font-medium mb-2">
                          Téléphone *
                        </label>
                        <Input
                          type="tel"
                          placeholder="(514) 555-0123"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-copper focus:ring-1 focus:ring-copper transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-navy text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="jean@exemple.ca"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-copper focus:ring-1 focus:ring-copper transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-navy text-sm font-medium mb-2">
                        Type de projet *
                      </label>
                      <Select required>
                        <SelectTrigger className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-copper focus:ring-1 focus:ring-copper">
                          <SelectValue placeholder="Sélectionnez un type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="normes">Mise aux normes</SelectItem>
                          <SelectItem value="eclairage">Installation éclairage</SelectItem>
                          <SelectItem value="reno">Rénovation résidentielle</SelectItem>
                          <SelectItem value="borne-ev">Borne de recharge EV</SelectItem>
                          <SelectItem value="commercial">Projet commercial</SelectItem>
                          <SelectItem value="urgence">Urgence</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-navy text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        placeholder="Décrivez votre projet..."
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-copper focus:ring-1 focus:ring-copper transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-copper hover:bg-copper/90 text-white font-semibold py-4 rounded-xl shadow-lg shadow-copper/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer la demande
                    </Button>
                  </form>
                )}
              </div>

              {/* Info Card */}
              <div className="lg:w-[380px] space-y-6">
                <div className="bg-navy rounded-[28px] p-6 lg:p-8 text-white">
                  <h3 className="font-display font-bold text-xl mb-6">
                    Nos coordonnées
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-copper" />
                      </div>
                      <div>
                        <p className="text-white/50 text-sm mb-1">Téléphone</p>
                        <a
                          href="tel:5145550142"
                          className="font-display font-semibold text-lg hover:text-copper transition-colors"
                        >
                          (514) 555-0142
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-copper" />
                      </div>
                      <div>
                        <p className="text-white/50 text-sm mb-1">Email</p>
                        <a
                          href="mailto:bonjour@voltexelectrique.ca"
                          className="font-display font-semibold text-lg hover:text-copper transition-colors"
                        >
                          bonjour@voltexelectrique.ca
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-copper" />
                      </div>
                      <div>
                        <p className="text-white/50 text-sm mb-1">Heures d'ouverture</p>
                        <p className="font-semibold">Lun–Ven: 7h30–17h30</p>
                        <p className="text-copper text-sm">Urgence: 24/7</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-copper" />
                      </div>
                      <div>
                        <p className="text-white/50 text-sm mb-1">Zone de service</p>
                        <p className="font-semibold">Grand Montréal</p>
                        <p className="text-white/70 text-sm">Rive-Sud et Rive-Nord sur RDV</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Card */}
                <div className="bg-copper rounded-[28px] p-6 lg:p-8 text-white">
                  <h3 className="font-display font-bold text-xl mb-3">
                    Urgence électrique?
                  </h3>
                  <p className="text-white/80 text-sm mb-5">
                    Notre équipe est disponible 24h/24, 7j/7 pour les dépannages critiques.
                  </p>
                  <a
                    href="tel:5145550142"
                    className="inline-flex items-center gap-2 bg-white text-copper font-semibold px-5 py-3 rounded-xl hover:bg-white/90 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Appeler maintenant
                  </a>
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
