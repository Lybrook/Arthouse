import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'
import { ArrowRight, Palette, Frame } from 'lucide-react'

const HeroSection = ({ onNavigate }) => {
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const handleExploreCollection = () => {
    const aboutElement = document.getElementById('about')
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleViewSamples = () => {
    if (onNavigate) {
      onNavigate('samples')
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Floating Background Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20"
        style={{ backgroundColor: 'var(--artsy-aquamarine)' }}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-15"
        style={{ backgroundColor: 'var(--artsy-saffron)' }}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full opacity-10"
        style={{ backgroundColor: 'var(--artsy-dark-teal)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.h1 
            variants={staggerItem}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span style={{ color: 'var(--artsy-dark-teal)' }}>Transform</span>
            <br />
            <span className="text-gray-800">Your Space with</span>
            <br />
            <motion.span 
              style={{ color: 'var(--artsy-saffron)' }}
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              Artsy
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={staggerItem}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover premium printed and drawn paintings that bring life to your walls. 
            Each piece is carefully crafted to inspire and elevate your living space.
          </motion.p>

          {/* Feature Icons */}
          <motion.div 
            variants={staggerItem}
            className="flex justify-center space-x-12 py-8"
          >
            <motion.div 
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center space-y-2"
            >
              <div 
                className="p-4 rounded-full"
                style={{ backgroundColor: 'var(--artsy-aquamarine)' }}
              >
                <Palette className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">Hand Drawn</span>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center space-y-2"
            >
              <div 
                className="p-4 rounded-full"
                style={{ backgroundColor: 'var(--artsy-saffron)' }}
              >
                <Frame className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">Premium Prints</span>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={handleExploreCollection}
                size="lg" 
                className="px-8 py-4 text-lg font-semibold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: 'var(--artsy-dark-teal)' }}
              >
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={handleViewSamples}
                variant="outline"
                size="lg" 
                className="px-8 py-4 text-lg font-semibold rounded-full border-2 hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: 'var(--artsy-aquamarine)', color: 'var(--artsy-aquamarine)' }}
              >
                View Samples
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection

