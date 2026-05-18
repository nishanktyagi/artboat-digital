import { motion } from 'motion/react';
import { ShoppingCart, Code, Smartphone, TrendingUp, Palette, BarChart, Globe, Users } from 'lucide-react';
import { ContactModal } from '../components/ContactModal';
import { useState } from 'react';

export function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'Shopify Store Setup & Custom Development',
      description: 'From zero to launched — fast, beautiful, and built to sell',
      image: 'https://images.unsplash.com/photo-1758522484646-c8694d1784fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      features: [
        'New Shopify store build (Starter / Growth / Enterprise tiers)',
        'Custom theme development tailored to your brand',
        'Product catalog setup and collections architecture',
        'Payment gateway integration (Razorpay, Paymob, Mercado Pago, etc.)',
        'Multi-language and multi-currency setup',
        'Mobile-first design (80%+ shop on mobile in Tier 2 markets)',
      ],
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Shopify Theme Design & Speed Optimization',
      description: 'A fast, beautiful store isn\'t optional — it\'s your first salesperson',
      image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      features: [
        'Shopify 2.0 theme customization',
        'Core Web Vitals optimization (page speed = conversion rate)',
        'Brand identity integration',
        'A/B tested layouts and homepage designs',
        'Conversion-optimized product pages and collections',
        'Mobile-responsive designs for emerging markets',
      ],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Shopify App Integration & Custom Functionality',
      description: 'The right apps. The right integrations. Zero bloat',
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      features: [
        'Shopify app audit and lean stack recommendations',
        'ERP and inventory system integrations',
        'WhatsApp & SMS marketing integrations (India, MENA, LATAM)',
        'Loyalty programs and referral apps',
        'Custom Shopify app development',
        'Payment and shipping automation',
      ],
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Shopify Growth Marketing',
      description: 'We don\'t just run ads — we build revenue machines',
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      features: [
        'Meta (Facebook/Instagram) ads with Shopify pixel tracking',
        'Google Shopping and Performance Max campaigns',
        'WhatsApp Business marketing (high-ROI for Tier 2 markets)',
        'Influencer and creator marketing coordination',
        'Email & SMS drip campaigns for abandoned carts',
        'Full-funnel campaign management and optimization',
      ],
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Shopify CRO (Conversion Rate Optimization)',
      description: 'More traffic isn\'t always the answer. More conversions always are',
      image: 'https://images.unsplash.com/flagged/photo-1582111945769-5255b296e574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      features: [
        'Heatmap and session recording analysis',
        'Checkout flow optimization',
        'Product page copywriting and image optimization',
        'Trust-builder integrations (reviews, badges, UGC)',
        'Pricing strategy and upsell/cross-sell setup',
        'A/B testing and data-driven improvements',
      ],
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: 'Shopify Analytics & Revenue Dashboards',
      description: 'If you can\'t measure it, you can\'t grow it',
      image: 'https://images.unsplash.com/photo-1686061592689-312bbfb5c055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      features: [
        'Google Analytics 4 + Shopify integration',
        'Custom sales and marketing dashboards',
        'Attribution modeling (which channels drive real revenue)',
        'Monthly performance reports with actionable insights',
        'Cohort analysis and customer lifetime value tracking',
        'ROI tracking and revenue forecasting',
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Shopify Specialists',
      description: 'We live and breathe Shopify. No generalist guesswork.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Built for Your Market',
      description: 'We understand local payment preferences, mobile behavior, and consumer psychology in Tier 2 markets.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'ROI-First Mindset',
      description: 'Every decision is tied to your revenue, not vanity metrics.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'End-to-End Partnership',
      description: 'From your first Shopify store to your 10th market expansion, we grow with you.',
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
            Shopify-First Services Built for E-commerce Brands That Mean Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-purple-100 max-w-3xl mx-auto"
          >
            Every service we offer is built around one goal — growing your Shopify store's revenue sustainably
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative h-56 overflow-hidden group">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-purple-900/60 transition-all duration-300"></div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="absolute bottom-4 left-6 w-16 h-16 bg-white rounded-xl flex items-center justify-center text-purple-600 shadow-xl"
                  >
                    {service.icon}
                  </motion.div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Why Choose ArtBoat Digital?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex gap-6 p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-purple-100 mb-8"
          >
            Let's discuss how our services can transform your Shopify store's revenue
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
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all"
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
