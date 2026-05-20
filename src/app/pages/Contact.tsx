import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, CheckCircle, Send } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    company: '',
    service: '',
    message: '',
  });

  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const itiRef = useRef<any>(null);
  const [formMsg, setFormMsg] = useState<{ text: string; type: 'success' | 'error' | ''; visible: boolean }>({ text: '', type: '', visible: false });

  useEffect(() => {
    const tryInit = () => {
      const win = window as any;
      if (phoneInputRef.current && win.intlTelInput && !itiRef.current) {
        // Delay initialization slightly in case the input is inside a hidden container
        setTimeout(() => {
          try {
            itiRef.current = win.intlTelInput(phoneInputRef.current, {
              initialCountry: 'in',
              separateDialCode: true,
              utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/utils.js',
            });
            window.dispatchEvent(new Event('resize'));
          } catch (e) { }
        }, 100);
      }
    };

    if (typeof (window as any).intlTelInput === 'undefined') {
      const id = setInterval(() => {
        tryInit();
        if ((window as any).intlTelInput) clearInterval(id);
      }, 200);
      return () => clearInterval(id);
    }

    tryInit();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Full Name
    if (formData.fullName.trim() === '') {
      setFormMsg({
        text: 'Please enter your full name.',
        type: 'error',
        visible: true
      });
      return;
    }

    // Email
    if (formData.email.trim() === '') {
      setFormMsg({
        text: 'Please enter your email address.',
        type: 'error',
        visible: true
      });
      return;
    }

    // Phone
    if (formData.mobile.trim() === '') {
      setFormMsg({
        text: 'Please enter your phone number.',
        type: 'error',
        visible: true
      });
      return;
    }

    

    // Service
    if (formData.service.trim() === '') {
      setFormMsg({
        text: 'Please select a service.',
        type: 'error',
        visible: true
      });
      return;
    }

    // Message
    if (formData.message.trim() === '') {
      setFormMsg({
        text: 'Please enter your project details.',
        type: 'error',
        visible: true
      });
      return;
    }

    // Validate Phone Number
    let mobileNumber = '';

    if (itiRef.current) {
      try {
        if (!itiRef.current.isValidNumber()) {
          setFormMsg({
            text: 'Invalid mobile number.',
            type: 'error',
            visible: true
          });
          return;
        }

        mobileNumber = itiRef.current.getNumber();

      } catch (err) {
        mobileNumber = formData.mobile || '';
      }
    } else {
      mobileNumber = formData.mobile || '';
    }

    // Prepare Form Data
    const form = new FormData();

    form.append('name', formData.fullName);
    form.append('mobile', mobileNumber);
    form.append('email', formData.email);
    form.append('company', formData.company);
    form.append('service', formData.service);
    form.append('message', formData.message);

    const submitUrl =
      'https://script.google.com/macros/s/AKfycbwJx5KNzBKEP7DeyKZWHp7qoUQHL966vIZeSlg9tVnZkBiSc-foER95ywehmedBUxWs/exec';

    fetch(submitUrl, {
      method: 'POST',
      body: form
    })
      .then(() => {
        setFormMsg({
          text: 'Thanks — your message was sent.',
          type: 'success',
          visible: true
        });

        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          company: '',
          service: '',
          message: '',
        });
      })
      .catch(() => {
        setFormMsg({
          text: 'There was an error sending your message.',
          type: 'error',
          visible: true
        });
      });
  };
  const faqs = [
    {
      question: 'How long does it take to see results from Shopify marketing?',
      answer: 'Paid ads can deliver your first sales within 72 hours of launch. SEO and organic growth compound over 3–6 months. We set clear milestones so you know exactly what to expect.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'We specialize in fashion, beauty, health & wellness, food & beverage, and home goods — the biggest Shopify categories in Tier 2 markets. But we\'ve worked across 15+ niches.',
    },
    {
      question: 'Do you offer custom packages?',
      answer: 'Yes — we offer Launch Packages (new stores), Growth Retainers (ongoing management), and CRO Sprints (short-term conversion optimization). All are scoped to your budget and goals.',
    },
    {
      question: 'How do you measure success?',
      answer: 'Revenue. Specifically: Shopify store revenue, conversion rate, average order value, customer acquisition cost, and return on ad spend (ROAS). Every report ties back to money.',
    },
    {
      question: 'What makes ArtBoat Digital different?',
      answer: 'We only work with Shopify. We understand Tier 2 market consumer behavior. And we treat your store like it\'s our own.',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Let's Build Your Shopify Success Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-purple-100 max-w-3xl mx-auto"
          >
            Whether you're launching your first store or scaling to your next million — we're ready to help. Tell us about your brand.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      ref={phoneInputRef}
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.mobile}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="ecommerce">E-commerce Development</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend Development</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="design">UI/UX Design</option>
                    <option value="analytics">Analytics & Insights</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share your vision, goals, and any specific requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
        
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(147, 51, 234, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 group"
                >
                  Send Message
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send size={20} className="group-hover:rotate-45 transition-transform" />
                  </motion.div>
                </motion.button>
                {formMsg.visible && (
                  <div className={`mt-4 p-3 rounded-md text-sm ${formMsg.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {formMsg.text}
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Visit Us</p>
                      <p className="text-gray-600">WeWork Galaxy Business Park, Sector 62, A-44, Sushil Marg, Block A, Industrial Area, Noida, UP 201309</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Call Us</p>
                      <p className="text-gray-600">+91 6393754583</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email Us</p>
                      <p className="text-gray-600">artboatdigital@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Working Hours</p>
                      <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Work With Us */}
              <div className="bg-gradient-to-br from-purple-600 to-cyan-500 rounded-2xl shadow-lg p-6 text-white">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Why Work With Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Free initial consultation',
                    'Custom solutions for your brand',
                    'Proven track record of success',
                    'Dedicated account manager',
                    'Transparent communication',
                    'Results-driven approach',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Schedule a Call */}
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Schedule a Call
                </h3>
                <p className="text-gray-600 mb-4">
                  Prefer to talk? Book a free 30-minute consultation call with our team.
                </p>
                <button className="w-full border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all">
                  Book a Meeting
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-4 text-gray-900"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-gray-600 mb-12"
          >
            Quick answers to common questions about our services
          </motion.p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-purple-600 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
