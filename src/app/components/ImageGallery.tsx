import { motion } from 'motion/react';
import { Lightbulb, Palette, Code2, Rocket, CheckCircle2 } from 'lucide-react';

export function ImageGallery() {
  const processSteps = [
    {
      number: '01',
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Discovery & Strategy',
      description: 'We begin by understanding your business goals, target audience, and project requirements to create a tailored strategy.',
      image: 'https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      color: 'from-purple-600 to-purple-500',
    },
    {
      number: '02',
      icon: <Palette className="w-8 h-8" />,
      title: 'Design & Planning',
      description: 'Our creative team designs stunning visuals and user experiences that align with your brand identity and engage your audience.',
      image: 'https://images.unsplash.com/photo-1632937145991-91620be68319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      color: 'from-blue-600 to-blue-500',
    },
    {
      number: '03',
      icon: <Code2 className="w-8 h-8" />,
      title: 'Development',
      description: 'Expert developers bring designs to life with clean, scalable code using the latest technologies and best practices.',
      image: 'https://images.unsplash.com/photo-1774620396033-18782cda8242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      color: 'from-indigo-600 to-indigo-500',
    },
    {
      number: '04',
      icon: <Rocket className="w-8 h-8" />,
      title: 'Launch & Optimize',
      description: 'We deploy your project with thorough testing and provide ongoing optimization and support for continued success.',
      image: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      color: 'from-cyan-600 to-cyan-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A streamlined approach that transforms ideas into successful digital solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 lg:gap-12`}
            >
              {/* Image Section */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20`}></div>
                  <div className="absolute top-6 left-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-xl`}>
                      {step.icon}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-2xl mb-4`}>
                    {step.number}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2 text-purple-600">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-semibold">Proven methodology with measurable results</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Why Our Process Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-purple-100">Client Collaboration</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">3-6</div>
              <div className="text-purple-100">Week Average Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-purple-100">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
