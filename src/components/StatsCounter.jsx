import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Palette, Award, Globe } from 'lucide-react'

const StatsCounter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    {
      id: 1,
      icon: Users,
      number: 50000,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Artists and collectors worldwide',
      color: 'from-[#ff9900] to-[#00cc99]'
    },
    {
      id: 2,
      icon: Palette,
      number: 25000,
      suffix: '+',
      label: 'Artworks Created',
      description: 'Digital masterpieces delivered',
      color: 'from-[#00cc99] to-[#597931]'
    },
    {
      id: 3,
      icon: Award,
      number: 150,
      suffix: '+',
      label: 'Awards Won',
      description: 'Recognition for excellence',
      color: 'from-[#597931] to-[#003300]'
    },
    {
      id: 4,
      icon: Globe,
      number: 95,
      suffix: '%',
      label: 'Global Reach',
      description: 'Countries served worldwide',
      color: 'from-[#003300] to-[#ff9900]'
    }
  ]

  const AnimatedNumber = ({ number, suffix, isVisible }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = number / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= number) {
          setCount(number)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [isVisible, number])

    return (
      <span className="text-4xl md:text-5xl font-bold">
        {count.toLocaleString()}{suffix}
      </span>
    )
  }

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#003300] to-[#00cc99] bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the scale of our creative influence and the trust placed in us by the global art community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-gray-700/30 hover:border-[#00cc99]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00cc99]/20 text-center">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                  
                  {/* Animated Icon */}
                  <motion.div
                    className="relative mb-6 flex justify-center"
                    whileHover={{ 
                      rotate: 360,
                      transition: { duration: 0.8 }
                    }}
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 energy-pulse`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>

                  {/* Animated Number */}
                  <motion.div
                    className="mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      <AnimatedNumber 
                        number={stat.number} 
                        suffix={stat.suffix}
                        isVisible={isInView}
                      />
                    </div>
                  </motion.div>

                  {/* Label */}
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                    className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-[#00cc99] transition-colors duration-300"
                  >
                    {stat.label}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.7, duration: 0.5 }}
                    className="text-gray-600 dark:text-gray-300 text-sm"
                  >
                    {stat.description}
                  </motion.p>

                  {/* Hover Effect Lines */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#00cc99] to-[#ff9900] group-hover:w-full transition-all duration-500 rounded-full" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#ff9900] to-[#00cc99] group-hover:w-full transition-all duration-500 rounded-full" />
                  
                  {/* Corner Glow Effects */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#00cc99] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#ff9900] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#597931] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#003300] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-[#00cc99]/20 to-transparent rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-gradient-to-r from-[#ff9900]/20 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-10 left-1/3 w-28 h-28 bg-gradient-to-r from-[#597931]/20 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Data Streams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#00cc99]/30 to-transparent opacity-30" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#ff9900]/30 to-transparent opacity-30" />
      </div>
    </section>
  )
}

export default StatsCounter

