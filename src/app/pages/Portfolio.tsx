import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Code, Palette, ShoppingCart, TrendingUp, Smartphone, BarChart } from 'lucide-react';
import { useState } from 'react';
import { ContactModal } from '../components/ContactModal';

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Luxury E-commerce Platform',
      category: 'E-commerce Development',
      description: 'A premium online store featuring seamless checkout, product filters, and real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1648134859177-66e35b61e106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3NzQxODg0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <ShoppingCart className="w-5 h-5" />,
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      color: 'from-purple-600 to-blue-500',
    },
    {
      id: 2,
      title: 'Mobile Fitness App',
      category: 'Mobile App Design',
      description: 'A modern fitness tracking application with personalized workout plans and progress analytics.',
      image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzc3Mzk2NjgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Smartphone className="w-5 h-5" />,
      tags: ['React Native', 'Firebase', 'UI/UX', 'Animation'],
      color: 'from-pink-600 to-purple-500',
    },
    {
      id: 3,
      title: 'Business Analytics Dashboard',
      category: 'Web Development',
      description: 'Real-time data visualization dashboard with custom charts and advanced filtering capabilities.',
      image: 'https://images.unsplash.com/photo-1625296276703-3fbc924f07b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc3NDM3OTE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <BarChart className="w-5 h-5" />,
      tags: ['Vue.js', 'D3.js', 'PostgreSQL', 'REST API'],
      color: 'from-blue-600 to-cyan-500',
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'Digital Marketing',
      description: 'Multi-platform marketing campaign that increased engagement by 300% and doubled conversion rates.',
      image: 'https://images.unsplash.com/photo-1762330464824-21e95b769038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzc3NDg1NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <TrendingUp className="w-5 h-5" />,
      tags: ['SEO', 'Social Media', 'Analytics', 'Content Strategy'],
      color: 'from-orange-600 to-red-500',
    },
    {
      id: 5,
      title: 'Brand Identity Design',
      category: 'UI/UX Design',
      description: 'Complete brand redesign including logo, color palette, typography, and design system.',
      image: 'https://images.unsplash.com/photo-1634671495197-fb9ec3230ef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kJTIwZGVzaWdufGVufDF8fHx8MTc3NzQ4NTU3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Palette className="w-5 h-5" />,
      tags: ['Figma', 'Branding', 'Design System', 'Style Guide'],
      color: 'from-purple-600 to-pink-500',
    },
    {
      id: 6,
      title: 'Marketplace Platform',
      category: 'Full Stack Development',
      description: 'Multi-vendor marketplace with vendor dashboards, order management, and payment processing.',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc3NzQ4NTU3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Code className="w-5 h-5" />,
      tags: ['Next.js', 'TypeScript', 'GraphQL', 'AWS'],
      color: 'from-indigo-600 to-blue-500',
    },
  ];

  const categories = ['All', 'Shopify Store Builds', 'CRO & Redesign', 'Paid Ads & Growth', 'Shopify Migration', 'Branding & Identity'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => {
        if (activeCategory === 'Shopify Store Builds') return project.category.includes('E-commerce') || project.category.includes('Development');
        if (activeCategory === 'CRO & Redesign') return project.category.includes('Design') || project.category.includes('Web Development');
        if (activeCategory === 'Paid Ads & Growth') return project.category.includes('Digital Marketing');
        if (activeCategory === 'Shopify Migration') return project.category.includes('Full Stack') || project.category.includes('Development');
        if (activeCategory === 'Branding & Identity') return project.category.includes('Design');
        return false;
      });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Shopify Stores We've Launched, Grown & Scaled
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto"
          >
            Real brands. Real markets. Real results — across Asia, LATAM, Africa, and the Middle East.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b sticky top-16 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full border-2 transition-all font-semibold ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white border-transparent shadow-lg'
                    : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <p className="text-lg text-gray-600">
              Showing <span className="font-bold text-purple-600">{filteredProjects.length}</span> {activeCategory === 'All' ? 'projects' : `${activeCategory} projects`}
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-xl"
                    >
                      View Project <ExternalLink size={18} />
                    </motion.button>
                  </div>
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2`}>
                    {project.icon}
                    {project.category}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-500">No projects found in this category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Happy Clients' },
              { number: '25+', label: 'Team Members' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-purple-100">{stat.label}</div>
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
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Let's build your Shopify success story together
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
