import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '../components/ui/button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: 'var(--artsy-dark-teal)' }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Ready to transform your space? We'd love to help you find the perfect artwork for your home or office.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 
                className="text-2xl font-bold mb-6"
                style={{ color: 'var(--artsy-dark-teal)' }}
              >
                Contact Information
              </h3>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div 
                className="p-3 rounded-full"
                style={{ backgroundColor: 'var(--artsy-aquamarine)' }}
              >
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">hello@artsy.com</p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div 
                className="p-3 rounded-full"
                style={{ backgroundColor: 'var(--artsy-saffron)' }}
              >
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div 
                className="p-3 rounded-full"
                style={{ backgroundColor: 'var(--artsy-dark-teal)' }}
              >
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">123 Art Street, Creative District, NY 10001</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-6"
              style={{ color: 'var(--artsy-dark-teal)' }}
            >
              Send us a Message
            </motion.h3>

            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--artsy-aquamarine)] focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--artsy-aquamarine)] focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--artsy-aquamarine)] focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your project or ask any questions..."
                />
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit"
                  className="w-full py-3 text-lg font-semibold text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: 'var(--artsy-dark-teal)' }}
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

