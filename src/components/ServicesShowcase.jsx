import React from 'react'
import { motion } from 'framer-motion'
import { Palette, Layers, Zap, Sparkles, Eye, Cpu } from 'lucide-react'

const ServicesShowcase = () => {
  const services = [
    {
      id: 1,
      icon: Palette,
      title: "Digital Art Creation",
      description: "Custom digital artworks crafted with cutting-edge AI and traditional techniques",
      features: ["AI-Assisted Design", "Custom Compositions", "High Resolution Output"],
      color: "from-[#ff9900] to-[#00cc99]",
      hoverColor: "group-hover:from-[#ff9900]/20 group-hover:to-[#00cc99]/20"
    },
    {
      id: 2,
      icon: Layers,
      title: "3D Visualization",
      description: "Immersive 3D art pieces that bring depth and dimension to your space",
      features: ["3D Modeling", "Interactive Elements", "VR Compatible"],
      color: "from-[#00cc99] to-[#597931]",
      hoverColor: "group-hover:from-[#00cc99]/20 group-hover:to-[#597931]/20"
    },
    {
      id: 3,
      icon: Zap,
      title: "Interactive Installations",
      description: "Dynamic art pieces that respond to user interaction and environmental changes",
      features: ["Motion Sensors", "Real-time Adaptation", "Multi-touch Support"],
      color: "from-[#597931] to-[#003300]",
      hoverColor: "group-hover:from-[#597931]/20 group-hover:to-[#003300]/20"
    },
    {
      id: 4,
      icon: Sparkles,
      title: "Holographic Displays",
      description: "Next-generation holographic art that floats in mid-air with stunning realism",
      features: ["3D Projection", "Gesture Control", "Ambient Integration"],
      color: "from-[#003300] to-[#ff9900]",
      hoverColor: "group-hover:from-[#003300]/20 group-hover:to-[#ff9900]/20"
    },
    {
      id: 5,
      icon: Eye,
      title: "Augmented Reality",
      description: "AR experiences that overlay digital art onto your physical environment",
      features: ["Mobile AR", "Spatial Tracking", "Cloud Sync"],
      color: "from-[#ff9900] to-[#597931]",
      hoverColor: "group-hover:from-[#ff9900]/20 group-hover:to-[#597931]/20"
    },
    {
      id: 6,
      icon: Cpu,
      title: "AI Art Generation",
      description: "Leverage advanced AI algorithms to create unique, personalized artworks",
      features: ["Style Transfer", "Prompt-based Creation", "Infinite Variations"],
      color: "from-[#597931] to-[#00cc99]",
      hoverColor: "group-hover:from-[#597931]/20 group-hover:to-[#00cc99]/20"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#597931] to-[#ff9900] bg-clip-text text-transparent">
            Future-Ready Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of cutting-edge digital art services designed for tomorrow's creative landscape
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 hover:border-[#00cc99]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00cc99]/20 hover:-translate-y-2">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                  
                  {/* Floating Icon */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-[#00cc99] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-[#00cc99] to-[#ff9900] rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-6 bg-gradient-to-r from-[#00cc99] to-[#ff9900] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#00cc99]/30 transition-all duration-300 cyber-button"
                  >
                    Learn More
                  </motion.button>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00cc99]/5 to-[#ff9900]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Corner Decorations */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#00cc99] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#ff9900] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#00cc99]/10 to-transparent rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#ff9900]/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-[#597931]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  )
}

export default ServicesShowcase

