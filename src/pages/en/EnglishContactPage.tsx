import { useState } from 'react';
import { EnglishNavigation } from '@/components/EnglishNavigation';
import { EnglishFooter } from '@/components/EnglishFooter';
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

export function EnglishContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="relative w-full min-h-screen bg-off-white">
      <EnglishNavigation />
      
      <main>
        <PageHero
          title="Contact Us"
          subtitle="We're here to help"
          description="Need a quote or consultation? Fill out the form below and we'll get back to you within 24 hours."
          image="/hero_electrician.jpg"
        />

        <section className="py-16 lg:py-24 grain-overlay">
          <div className="w-full px-6 lg:px-[6vw]">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="flex-1 bg-white rounded-[28px] p-6 lg:p-10 border border-navy/8 card-shadow">
                <h2 className="font-display font-bold text-navy text-display-3 mb-2">
                  Request a Quote
                </h2>
                <p className="text-gray text-sm lg:text-base mb-8">
                  Tell us about your project. We'll respond within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-display font-bold text-navy text-xl mb-2">Message Sent!</h3>
                    <p className="text-gray">We'll contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-navy text-sm font-medium mb-2">Full Name *</label>
                        <Input type="text" placeholder="John Smith" required className="w-full px-4 py-3 rounded-xl border border-navy/10" />
                      </div>
                      <div>
                        <label className="block text-navy text-sm font-medium mb-2">Phone *</label>
                        <Input type="tel" placeholder="(514) 555-0123" required className="w-full px-4 py-3 rounded-xl border border-navy/10" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-navy text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="john@example.com" required className="w-full px-4 py-3 rounded-xl border border-navy/10" />
                    </div>
                    <div>
                      <label className="block text-navy text-sm font-medium mb-2">Project Type *</label>
                      <Select required>
                        <SelectTrigger className="w-full px-4 py-3 rounded-xl border border-navy/10">
                          <SelectValue placeholder="Select a type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="normes">Code Compliance</SelectItem>
                          <SelectItem value="eclairage">Lighting Installation</SelectItem>
                          <SelectItem value="reno">Residential Renovation</SelectItem>
                          <SelectItem value="borne-ev">EV Charging Station</SelectItem>
                          <SelectItem value="commercial">Commercial Project</SelectItem>
                          <SelectItem value="urgence">Emergency</SelectItem>
                          <SelectItem value="autre">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-navy text-sm font-medium mb-2">Message</label>
                      <Textarea placeholder="Describe your project..." rows={4} className="w-full px-4 py-3 rounded-xl border border-navy/10 resize-none" />
                    </div>
                    <Button type="submit" className="w-full bg-copper hover:bg-copper/90 text-white font-semibold py-4 rounded-xl">
                      <Send className="w-4 h-4 mr-2" />
                      Send Request
                    </Button>
                  </form>
                )}
              </div>

              <div className="lg:w-[380px] space-y-6">
                <div className="bg-navy rounded-[28px] p-6 lg:p-8 text-white">
                  <h3 className="font-display font-bold text-xl mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-copper" />
                      </div>
                      <div>
                        <p className="text-white/50 text-sm mb-1">Phone</p>
                        <a href="tel:5145550142" className="font-display font-semibold text-lg hover:text-copper transition-colors">(514) 555-0142</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-copper" />
                      </div>
                      <div>
                        <p className="text-white/50 text-sm mb-1">Email</p>
                        <a href="mailto:bonjour@voltexelectrique.ca" className="font-display font-semibold text-lg hover:text-copper transition-colors">bonjour@voltexelectrique.ca</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-copper" />
                      </div>
                      <div>
                        <p className="text-white/50 text-sm mb-1">Business Hours</p>
                        <p className="font-semibold">Mon–Fri: 7:30 AM–5:30 PM</p>
                        <p className="text-copper text-sm">Emergency: 24/7</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-copper" />
                      </div>
                      <div>
                        <p className="text-white/50 text-sm mb-1">Service Area</p>
                        <p className="font-semibold">Greater Montreal</p>
                        <p className="text-white/70 text-sm">South Shore & North Shore by appointment</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-copper rounded-[28px] p-6 lg:p-8 text-white">
                  <h3 className="font-display font-bold text-xl mb-3">Electrical Emergency?</h3>
                  <p className="text-white/80 text-sm mb-5">Our team is available 24/7 for critical repairs.</p>
                  <a href="tel:5145550142" className="inline-flex items-center gap-2 bg-white text-copper font-semibold px-5 py-3 rounded-xl hover:bg-white/90 transition-colors">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
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
