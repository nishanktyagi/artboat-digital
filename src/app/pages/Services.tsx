import { motion } from 'motion/react';
import { ShoppingCart, Code, Smartphone, TrendingUp, Palette, BarChart, Globe, Users } from 'lucide-react';
import { ContactModal } from '../components/ContactModal';
import { useState } from 'react';

export function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Performance Marketing',
      subtitle: 'Meta Ads, Google Ads, TikTok, YouTube, Pinterest, LinkedIn, X',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
      items: [
        'Meta Ads (Facebook & Instagram)',
        'Google Ads',
        'TikTok Ads',
        'YouTube Ads',
        'WhatsApp Marketing',
        'Pinterest Ads',
        'LinkedIn Ads',
        'Retargeting Campaigns',
        'Funnel Optimization',
        'ROAS Optimization',
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Search Engine Optimization (SEO)',
      subtitle: 'Technical SEO, Shopify SEO, Local SEO, AI search',
      image: 'https://images.unsplash.com/photo-1537432376769-00a2b4f58f5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
      items: [
        'Technical SEO',
        'Ecommerce SEO',
        'Shopify SEO',
        'Product & Category SEO',
        'Content SEO',
        'Keyword Research',
        'Link Building',
        'Local SEO',
        'Bing SEO',
        'AI Search Optimization',
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Social Media Management',
      subtitle: 'Content, reels, engagement, creators, and reporting',
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
      items: [
        'Content Planning',
        'Monthly Content Calendar',
        'Post Designing',
        'Reel Management',
        'Caption Writing',
        'Community Management',
        'Engagement Management',
        'Influencer Coordination',
        'Platforms: Instagram, Facebook, LinkedIn, TikTok, Pinterest, X, YouTube',
        'Monthly Reporting',
      ],
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Shopify Store Development',
      subtitle: 'Store setup, theme work, payments, shipping and launch',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
      items: [
        'Shopify Store Setup',
        'Theme Setup & Customization',
        'Product Upload',
        'Payment Gateway Setup',
        'Shipping Setup',
        'App Integration',
        'Mobile Optimization',
        'Landing Pages',
        'Checkout Optimization',
        'Store Migration',
      ],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Shopify Custom Development',
      subtitle: 'Custom pages, APIs, apps, subscriptions, and cart experience',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
      items: [
        'Custom Shopify Features',
        'Custom Sections',
        'App Integration',
        'Subscription Features',
        'Bundle Features',
        'API Integration',
        'Custom Cart Experience',
        'Security & Backup',
        'Custom Product Pages',
        'Store Monitoring',
      ],
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Shopify Store Maintenance',
      subtitle: 'Product updates, performance, bug fixes and ongoing support',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
      items: [
        'Product Updates',
        'Website Maintenance',
        'Speed Optimization',
        'Bug Fixes',
        'Website Banners',
        'Technical Support',
        'App Management',
        'Security & Backup',
        'Store Monitoring',
      ],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Graphic Designing & Creative Production',
      subtitle: 'Ad creatives, social content, video and packaging design',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
      items: [
        'Ad Creatives',
        'Social Media Creatives',
        'Product Banners',
        'Website Banners',
        'Video Editing',
        'Motion Graphics',
        'Packaging Design',
        'Branding Assets',
        'PR Support',
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Online Reputation Management (ORM)',
      subtitle: 'Reviews, reputation defense, sentiment monitoring and brand trust',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
      items: [
        'Google Review Management',
        'Social Media Reputation',
        'Negative Review Handling',
        'Brand Monitoring',
        'Customer Sentiment Monitoring',
        'PR Support',
        'Winback Campaigns',
        'Trust Optimization',
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Retention Marketing',
      subtitle: 'Email, SMS, WhatsApp, carts, winback and automation',
      image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
      items: [
        'Email Marketing',
        'WhatsApp Automation',
        'SMS Marketing',
        'Abandoned Cart Automation',
        'Winback Campaigns',
        'Upsell & Cross-Sell Automation',
        'Retention Funnels',
        'Customer Lifetime Value',
      ],
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Analytics & Tracking',
      subtitle: 'GA4, GTM, pixel setup, conversion tracking and reporting',
      image: 'https://images.unsplash.com/photo-1519895609939-1d84ee4d77d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
      items: [
        'GA4 Setup',
        'Meta Pixel Setup',
        'GTM Setup',
        'Conversion API',
        'Ecommerce Tracking',
        'Dashboard Reporting',
        'Funnel Analysis',
        'Attribution Reporting',
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Full-stack ecommerce growth',
      description: 'Performance marketing, SEO, social, store development and retention marketing under one roof.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Shopify + D2C focus',
      description: 'Designed for Shopify brands and D2C businesses that want scalable revenue growth.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Data-first execution',
      description: 'Every campaign, page and push is measured to improve ROAS and customer lifetime value.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Growth partnership',
      description: 'We support launches, scale phases and long-term growth for ambitious ecommerce brands.',
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
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Full-stack Ecommerce Growth Agency for Shopify & D2C Brands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto"
          >
            We help Ecommerce and Shopify brands scale through Performance Marketing, SEO, Social Media Management, Store Development, and Retention Marketing
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.06, type: 'spring', stiffness: 100 }}
                whileHover={{
                  y: -8,
                  rotateY: 3,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative h-56 overflow-hidden group">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-purple-900/60 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-purple-600 shadow-xl">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    {service.subtitle}
                  </p>
                  <ul className="grid grid-cols-1 gap-2">
                    {service.items.slice(0, 6).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-purple-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {service.items.length > 6 && (
                    <p className="mt-4 text-sm text-gray-500">
                      +{service.items.length - 6} more Shopify growth capabilities
                    </p>
                  )}
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
