import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Truck, Heart } from 'lucide-react'

const AboutSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  }

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Each artwork is carefully selected and printed using the highest quality materials and techniques."
    },
    {
      icon: Users,
      title: "Expert Curation",
      description: "Our team of art experts curates every piece to ensure it meets our exceptional standards."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and secure shipping to bring your chosen artwork safely to your doorstep."
    },
    {
      icon: Heart,
      title: "Customer Love",
      description: "Thousands of satisfied customers have transformed their spaces with our beautiful art pieces."
    }
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: 'var(--artsy-dark-teal)' }}
          >
            Why Choose Artsy?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We believe that art has the power to transform spaces and inspire lives. 
            Our carefully curated collection of printed and drawn paintings brings 
            beauty and personality to every wall.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: 'var(--artsy-aquamarine)' }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ color: 'var(--artsy-dark-teal)' }}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Story */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <motion.div 
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <h3 
              className="text-3xl font-bold mb-6"
              style={{ color: 'var(--artsy-dark-teal)' }}
            >
              Our Story
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Founded with a passion for bringing exceptional art to everyday spaces, 
              Artsy has grown from a small studio to a trusted name in wall art. 
              We work directly with talented artists and use cutting-edge printing 
              technology to ensure every piece we deliver exceeds your expectations.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-3 rounded-full text-white font-semibold"
              style={{ backgroundColor: 'var(--artsy-saffron)' }}
            >
              Transforming Spaces Since 2020
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

