import { motion } from 'motion/react';
import { ArrowRight, Code, Palette, TrendingUp, ShoppingCart, Search, Share2, Smartphone, Wrench, ShieldCheck, RefreshCcw, BarChart, Target, Users, Globe, Zap } from 'lucide-react';
import { FloatingParticles } from '../components/FloatingParticles';
import { ContactModal } from '../components/ContactModal';
import { useState } from 'react';

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const serviceImages = {
    performanceMarketing: new URL('../../assets/images/Performance Marketing.jpeg', import.meta.url).href,
    searchEngineOptimization: new URL('../../assets/images/Search Engine Optimization.jpeg', import.meta.url).href,
    socialMediaManagement: new URL('../../assets/images/Social Media Management.jpeg', import.meta.url).href,
    shopifyStoreDevelopment: new URL('../../assets/images/Shopify Store Development.jpeg', import.meta.url).href,
    shopifyCustomDevelopment: new URL('../../assets/images/Shopify Custom Development.jpeg', import.meta.url).href,
    shopifyStoreMaintenance: new URL('../../assets/images/Shopify Store Maintenance.jpeg', import.meta.url).href,
    graphicDesign: new URL('../../assets/images/graphic-desigen.jpeg', import.meta.url).href,
    onlineReputationManagement: new URL('../../assets/images/Online Reputation Management .jpeg', import.meta.url).href,
    retentionMarketing: new URL('../../assets/images/Retention Marketing.jpeg', import.meta.url).href,
    analyticsTracking: new URL('../../assets/images/Analytics & Tracking.jpeg', import.meta.url).href,
  };

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Performance Marketing',
      description: 'Data-driven ad campaigns across Google, Meta, and emerging channels to maximize ROAS and grow revenue.',
      image: serviceImages.performanceMarketing,
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Search Engine Optimization (SEO)',
      description: 'Technical SEO, keyword strategy, and content optimization to improve visibility and organic rankings.',
      image: serviceImages.searchEngineOptimization,
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Social Media Management',
      description: 'Creative social campaigns, community engagement, and paid social strategies that build brand momentum.',
      image: serviceImages.socialMediaManagement,
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Shopify Store Development',
      description: 'End-to-end Shopify store builds with launch-ready themes, product pages, and seamless checkout experiences.',
      image: serviceImages.shopifyStoreDevelopment,
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Shopify Custom Development',
      description: 'Custom Shopify code, app integrations, and tailored storefront features built for your business needs.',
      image: serviceImages.shopifyCustomDevelopment,
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Shopify Store Maintenance',
      description: 'Ongoing support, speed tuning, security updates, and store health checks to keep your business running smoothly.',
      image: serviceImages.shopifyStoreMaintenance,
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Graphic Designing & Creative Production',
      description: 'Brand visuals, ad creatives, and high-impact design assets for web, social, and campaigns.',
      image: serviceImages.graphicDesign,
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Online Reputation Management (ORM)',
      description: 'Review monitoring, reputation growth, and trust-building strategies that protect your brand online.',
      image: serviceImages.onlineReputationManagement,
    },
    {
      icon: <RefreshCcw className="w-8 h-8" />,
      title: 'Retention Marketing',
      description: 'Email, SMS, and loyalty campaigns designed to keep customers returning and increase lifetime value.',
      image: serviceImages.retentionMarketing,
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Analytics & Tracking',
      description: 'Integrated analytics, tracking setup, and dashboards that show what drives your Shopify revenue.',
      image: serviceImages.analyticsTracking,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Banner Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1761223976372-f2324a8e2812?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGdyYWRpZW50JTIwcHVycGxlJTIwYmx1ZXxlbnwxfHx8fDE3Nzc0ODQ5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Digital Technology Banner"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay - reduced opacity to show banner */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/70 via-purple-500/60 to-blue-500/70"></div>
        </div>

        <FloatingParticles />

        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"
          ></motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6"
          >
            We Build Shopify Stores
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
              That Sell
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-2xl text-purple-100 mb-6 md:mb-8 max-w-3xl mx-auto px-2"
          >
            ArtBoat Digital is the Shopify growth partner for ambitious e-commerce brands across Asia, LATAM, Africa & the Middle East.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-3 md:gap-4 justify-center w-full px-2"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:shadow-2xl transition-all flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Build My Shopify Store <ArrowRight size={18} />
            </motion.button>
            <a
              href="#portfolio"
              className="w-full sm:w-auto border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all text-center text-sm md:text-base"
            >
              See Our Shopify Work
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 w-12 md:w-14 h-12 md:h-14 bg-white rounded-xl flex items-center justify-center text-purple-600">
                    {service.icon}
                  </div>
                </div>
                <div className="p-4 md:p-8">
                  <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Shopify Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-900 px-2">
              Why Shopify is the #1 Platform
            </h2>
            <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Shopify powers the world's fastest-growing e-commerce brands — from startups to enterprises.
            </p>
          </motion.div>

          {/* Main Content with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1758873271824-a3216c80d1ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3klMjB0ZWFtfGVufDF8fHx8MTc3NzU2ODI0NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Digital Marketing Strategy"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 md:space-y-6"
            >
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 md:w-6 h-5 md:h-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold mb-1 md:mb-2 text-gray-900">Reach a Global Audience</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Digital marketing breaks geographical barriers, allowing you to connect with potential customers worldwide.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold mb-1 md:mb-2 text-gray-900">Targeted Marketing</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Reach the right people at the right time with precise targeting based on demographics and behaviors.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <BarChart className="w-5 md:w-6 h-5 md:h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold mb-1 md:mb-2 text-gray-900">Measurable Results</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Track every click and conversion with real-time analytics to measure ROI accurately.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Cost-Effective',
                description: 'Higher ROI with lower costs and better targeting.',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Customer Engagement',
                description: 'Build meaningful relationships through multiple channels.',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Quick Results',
                description: 'See immediate impact from campaigns.',
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'Mobile-First Reach',
                description: 'Connect with customers on their smartphones.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center text-white mb-3 md:mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 md:mt-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-6 md:p-12 text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Shopify by the Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">500M+</div>
                <div className="text-xs sm:text-sm md:text-base text-purple-100">Shopify GMV in Asia-Pacific 2024</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">73%</div>
                <div className="text-xs sm:text-sm md:text-base text-purple-100">Prefer Mobile-Optimized Stores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">3x</div>
                <div className="text-xs sm:text-sm md:text-base text-purple-100">Average Revenue Growth on Shopify</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">ROI 8:1</div>
                <div className="text-xs sm:text-sm md:text-base text-purple-100">Shopify Brands Meta + Google ROAS</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 px-2"
          >
            Ready to Launch or Scale Your Shopify Store?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-purple-100 mb-6 md:mb-8"
          >
            Let's Make It Happen
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
              className="inline-block bg-white text-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:shadow-2xl transition-all text-sm md:text-base"
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
