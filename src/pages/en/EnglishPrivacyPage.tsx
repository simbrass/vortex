import { EnglishNavigation } from '@/components/EnglishNavigation';
import { EnglishFooter } from '@/components/EnglishFooter';

export function EnglishPrivacyPage() {
  return (
    <div className="relative w-full min-h-screen bg-off-white">
      <EnglishNavigation />
      
      <main className="pt-32 pb-20">
        <div className="w-full px-6 lg:px-[6vw]">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display font-bold text-navy text-display-2 mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray leading-relaxed mb-6">
                Last Updated: {new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="font-display font-bold text-navy text-xl mb-4">1. Introduction</h2>
                <p className="text-gray leading-relaxed mb-4">
                  Voltex Électrique Montréal ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-navy text-xl mb-4">2. Information We Collect</h2>
                <p className="text-gray leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 text-gray space-y-2 mb-4">
                  <li><strong>Personal Information:</strong> name, address, phone number, email address</li>
                  <li><strong>Property Information:</strong> project address, building type</li>
                  <li><strong>Project Information:</strong> description of requested work</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, pages visited</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-navy text-xl mb-4">3. How We Use Your Information</h2>
                <p className="text-gray leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 text-gray space-y-2 mb-4">
                  <li>Provide our electrical services and respond to your inquiries</li>
                  <li>Contact you regarding your project or quote request</li>
                  <li>Improve our website and services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Comply with our legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-navy text-xl mb-4">4. Sharing Your Information</h2>
                <p className="text-gray leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-gray space-y-2 mb-4">
                  <li>Our employees and authorized contractors</li>
                  <li>Government authorities when required by law</li>
                  <li>Third-party service providers who help us operate our business</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-navy text-xl mb-4">5. Data Security</h2>
                <p className="text-gray leading-relaxed mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-navy text-xl mb-4">6. Your Rights</h2>
                <p className="text-gray leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray space-y-2 mb-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw your consent at any time</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-navy text-xl mb-4">7. Cookies</h2>
                <p className="text-gray leading-relaxed mb-4">
                  Our website uses cookies to improve your browsing experience. You can configure your browser to refuse cookies, but this may affect certain features of the site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-navy text-xl mb-4">8. Changes to This Policy</h2>
                <p className="text-gray leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised update date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-navy text-xl mb-4">9. Contact Us</h2>
                <p className="text-gray leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-off-white rounded-[20px] p-6 mt-4">
                  <p className="text-navy font-semibold mb-2">Voltex Électrique Montréal</p>
                  <p className="text-gray text-sm mb-1">Phone: (514) 555-0142</p>
                  <p className="text-gray text-sm mb-1">Email: bonjour@voltexelectrique.ca</p>
                  <p className="text-gray text-sm">Service Area: Greater Montreal</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <EnglishFooter />
    </div>
  );
}
