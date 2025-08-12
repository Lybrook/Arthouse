import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Interior Designer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Artsy transformed my living space completely. The quality and attention to detail in every piece is extraordinary. My clients are always amazed by the artwork selection."
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Art Collector",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "I've been collecting art for over 20 years, and Artsy's curated collection rivals the best galleries. The digital pieces are particularly innovative and captivating."
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The futuristic designs and interactive elements make Artsy stand out. It's not just art; it's an experience that brings creativity to life in ways I never imagined."
    },
    {
      id: 4,
      name: "David Kim",
      role: "Tech Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As someone who appreciates both technology and art, Artsy perfectly bridges that gap. The 3D effects and animations create an immersive artistic journey."
    },
    {
      id: 5,
      name: "Luna Martinez",
      role: "Gallery Owner",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Artsy has revolutionized how we think about digital art presentation. The platform's innovative approach has inspired our own gallery's digital transformation."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const testimonialVariants = {
    enter: {
      x: 300,
      opacity: 0,
      scale: 0.8,
      rotateY: 45
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: {
      x: -300,
      opacity: 0,
      scale: 0.8,
      rotateY: -45
    }
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#ff9900] to-[#00cc99] bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover why thousands of art enthusiasts trust Artsy for their creative journey
          </p>
        </motion.div>

        <div className="relative h-80 md:h-96 perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.4 },
                rotateY: { duration: 0.6 }
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-white/20 dark:border-gray-700/30 shadow-2xl">
                <div className="flex flex-col items-center text-center">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-6"
                  >
                    <Quote className="w-12 h-12 text-[#00cc99] opacity-60" />
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic"
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.p>

                  {/* Avatar and Info */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative mb-4">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full border-4 border-[#00cc99]/30 shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#00cc99] rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-current" />
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[#ff9900] font-medium mb-3">
                      {testimonials[currentIndex].role}
                    </p>
                    
                    {/* Rating Stars */}
                    <div className="flex space-x-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                        >
                          <Star className="w-5 h-5 text-[#ff9900] fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#00cc99] scale-125 shadow-lg shadow-[#00cc99]/50'
                  : 'bg-gray-400 dark:bg-gray-600 hover:bg-[#ff9900] hover:scale-110'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Background Decorations */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-[#00cc99]/10 to-[#ff9900]/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-[#ff9900]/10 to-[#597931]/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  )
}

export default TestimonialsCarousel

