import { motion } from 'motion/react';
import { Target, Eye, Award, Users } from 'lucide-react';
import { ImageGallery } from '../components/ImageGallery';
import { ContactModal } from '../components/ContactModal';
import { useState } from 'react';

export function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission',
      description: 'To be the #1 Shopify growth agency for Tier 2 market brands by 2027.',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Vision',
      description: 'A world where brilliant products from emerging markets reach global buyers via Shopify.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Every store we launch must perform better than the last. No compromise on quality or results.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Partnership',
      description: 'We win when you win. Your Shopify revenue goals are our performance metrics.',
    },
  ];

  const stats = [
    { number: '150+', label: 'Shopify Stores Launched' },
    { number: '98%', label: 'Client Retention Rate' },
    { number: '12+', label: 'Tier 2 Markets Served' },
    { number: '5+', label: 'Years of Shopify-First Delivery' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-center"
          >
            The Shopify Agency Built for the World's Fastest-Growing E-commerce Markets
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-purple-100 max-w-3xl mx-auto text-center"
          >
            We're not a traditional agency. We're a Shopify-focused growth team that understands what it takes to succeed in markets like India, Southeast Asia, LATAM, and beyond.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                ArtBoat Digital was built with a clear mission: to give Shopify brands in Tier 2 markets the same quality of growth expertise that billion-dollar DTC brands in New York and London get — at a price that makes sense for your market.
              </p>
              <p className="text-gray-600 mb-4">
                We've seen too many great products fail because their digital presence didn't match their ambition. We fix that.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of Shopify-certified developers, designers, and growth marketers work exclusively in the e-commerce ecosystem, bringing deep expertise to every store we build and every campaign we run.
              </p>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl p-12 text-white"
            >
              <h3 className="text-3xl font-bold mb-6">
                What Makes Us Different?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                  </div>
                  <span>Shopify-exclusive focus — Every team member is certified and deeply experienced in the Shopify ecosystem</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                  </div>
                  <span>Tier 2 market expertise — We understand local payment preferences, mobile behavior, and consumer psychology</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                  </div>
                  <span>Startup-friendly approach — Flexible engagement models that grow with your budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                  </div>
                  <span>Transparent, milestone-based delivery — You always know what we're building and why</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center text-white mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <ImageGallery />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-purple-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            From your first Shopify store to your 10th market expansion, we grow with you
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all"
            >
              Get Free Shopify Audit
            </motion.button>
          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
