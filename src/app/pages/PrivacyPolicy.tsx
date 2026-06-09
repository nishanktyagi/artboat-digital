import { motion } from 'motion/react';

export function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            At ArtBoat Digital, we respect your privacy and are committed to protecting your personal information.
          </p>

          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
              <p className="leading-relaxed">
                We collect name, email, phone number, company name, project requirements, and website usage data when you contact us or submit a form.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">How We Use Information</h2>
              <p className="leading-relaxed">
                We use your information to respond to inquiries, provide services, improve website experience, and communicate regarding requested services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Data Protection</h2>
              <p className="leading-relaxed">
                We implement reasonable safeguards to protect your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">No Spam Policy</h2>
              <p className="leading-relaxed">
                We do not sell, rent, or misuse your information. We only contact you regarding your inquiry, requested services, or relevant business communication.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Third-Party Tools</h2>
              <p className="leading-relaxed">
                We may use analytics and advertising tools such as Google Analytics and Meta Pixel.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">User Rights</h2>
              <p className="leading-relaxed">
                You may request access, correction, or deletion of your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Lead Form Consent Statement</h2>
              <p className="leading-relaxed">
                By submitting this form, you agree to be contacted by our team regarding your project requirements.
              </p>
              <p className="leading-relaxed">
                Your information will remain secure and confidential and will only be used for business communication related to your inquiry.
              </p>
              <p className="leading-relaxed">
                We do not sell, share, or misuse your personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
              <p className="leading-relaxed">
                For questions about this Privacy Policy, please email us at <a href="mailto:artboatdigital@gmail.com" className="text-purple-600 underline">artboatdigital@gmail.com</a>.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
