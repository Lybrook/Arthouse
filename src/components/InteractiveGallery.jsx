import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

const InteractiveGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const artworks = [
    {
      id: 1,
      title: "Digital Dreams",
      artist: "AI Artist",
      image: "/src/assets/artwork1.jpg",
      description: "A vibrant exploration of digital consciousness"
    },
    {
      id: 2,
      title: "Neon Nights",
      artist: "Cyber Creator",
      image: "/src/assets/artwork2.jpg",
      description: "Urban landscapes in electric hues"
    },
    {
      id: 3,
      title: "Abstract Reality",
      artist: "Future Vision",
      image: "/src/assets/artwork3.jpg",
      description: "Where reality meets imagination"
    },
    {
      id: 4,
      title: "Cosmic Flow",
      artist: "Space Painter",
      image: "/src/assets/artwork4.jpg",
      description: "Celestial movements captured in time"
    },
    {
      id: 5,
      title: "Tech Harmony",
      artist: "Digital Sage",
      image: "/src/assets/artwork5.jpg",
      description: "The perfect balance of technology and art"
    },
    {
      id: 6,
      title: "Future Landscapes",
      artist: "Tomorrow's Eye",
      image: "/src/assets/artwork6.jpg",
      description: "Visions of worlds yet to come"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length)
  }

  const galleryVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
      scale: 0.8
    })
  }

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00cc99] to-[#ff9900] bg-clip-text text-transparent hover-neon">
            Interactive Gallery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our curated collection of digital masterpieces with immersive 3D interactions
          </p>
        </motion.div>

        {/* Main Gallery */}
        <div className="relative h-96 md:h-[500px] perspective-1000 mb-8">
          <AnimatePresence mode="wait" custom={currentIndex}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              variants={galleryVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                rotateY: { duration: 0.6 },
                scale: { duration: 0.4 }
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform-gpu">
                  <img
                    src={artworks[currentIndex].image}
                    alt={artworks[currentIndex].title}
                    className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">{artworks[currentIndex].title}</h3>
                    <p className="text-sm opacity-90 mb-1">by {artworks[currentIndex].artist}</p>
                    <p className="text-sm opacity-75">{artworks[currentIndex].description}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full p-3 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full p-3 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
          {artworks.map((artwork, index) => (
            <motion.button
              key={artwork.id}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'border-[#00cc99] scale-110 shadow-lg shadow-[#00cc99]/30'
                  : 'border-transparent hover:border-[#ff9900] hover:scale-105'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={artworks[currentIndex].image}
                  alt={artworks[currentIndex].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {artworks[currentIndex].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    by {artworks[currentIndex].artist}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {artworks[currentIndex].description}
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 bg-black/20 backdrop-blur-md rounded-full p-2 text-white hover:bg-black/40 transition-colors"
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default InteractiveGallery

