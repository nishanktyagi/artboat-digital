import { motion } from 'motion/react';

export function TermsAndConditions() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-10 md:p-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            By accessing this website, you agree to comply with these terms and conditions.
          </p>

          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Services and Agreements</h2>
              <p className="leading-relaxed">
                Services provided by ArtBoat Digital are subject to mutually agreed proposals, timelines, and deliverables.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Intellectual Property</h2>
              <p className="leading-relaxed">
                All website content, branding, graphics, and materials remain the intellectual property of ArtBoat Digital unless otherwise agreed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Modifications and Service Availability</h2>
              <p className="leading-relaxed">
                We reserve the right to modify, suspend, or discontinue services at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
              <p className="leading-relaxed">
                ArtBoat Digital shall not be liable for indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Cancellation Policy</h2>
              <p className="leading-relaxed">
                Clients may request cancellation of ongoing services by providing written notice.
              </p>
              <p className="leading-relaxed">
                Services already delivered, completed work, media spends, third-party costs, and committed resources are non-cancellable.
              </p>
              <p className="leading-relaxed">
                Any outstanding invoices must be settled before account closure.
              </p>
              <p className="leading-relaxed">
                Project files, access credentials, and assets will be handed over upon completion of financial obligations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Cookie Policy</h2>
              <p className="leading-relaxed">
                Our website uses cookies to improve user experience, analyze traffic, and enhance website functionality.
              </p>
              <p className="leading-relaxed">
                Cookies may be used for analytics, advertising, and website performance measurement.
              </p>
              <p className="leading-relaxed">
                Users may disable cookies through browser settings, though some website functionality may be affected.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Contact</h2>
              <p className="leading-relaxed">
                If you have questions about these terms, please contact us at <a href="mailto:artboatdigital@gmail.com" className="text-purple-600 underline">artboatdigital@gmail.com</a>.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
