import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Heart, ShoppingCart } from 'lucide-react'
import { Button } from '../components/ui/button'

// Import artwork images
import artwork1 from '../assets/artwork1.jpg'
import artwork2 from '../assets/artwork2.jpg'
import artwork3 from '../assets/artwork3.jpg'
import artwork4 from '../assets/artwork4.jpg'
import artwork5 from '../assets/artwork5.jpg'
import artwork6 from '../assets/artwork6.jpg'

const SamplesPage = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null)
  const [filter, setFilter] = useState('all')

  const artworks = [
    {
      id: 1,
      title: "Abstract Seascape",
      category: "abstract",
      price: "$299",
      image: artwork1,
      description: "A beautiful abstract seascape in blue and white tones, perfect for modern living spaces."
    },
    {
      id: 2,
      title: "Coastal Waves",
      category: "prints",
      price: "$199",
      image: artwork2,
      description: "High-quality coastal wave prints available in various sizes and finishes."
    },
    {
      id: 3,
      title: "Ocean Horizon",
      category: "abstract",
      price: "$449",
      image: artwork3,
      description: "A serene ocean horizon piece that brings tranquility to any space."
    },
    {
      id: 4,
      title: "Colorful Modern Set",
      category: "sets",
      price: "$399",
      image: artwork4,
      description: "A vibrant set of modern abstract pieces featuring bold colors and geometric shapes."
    },
    {
      id: 5,
      title: "Contemporary Canvas",
      category: "prints",
      price: "$349",
      image: artwork5,
      description: "Contemporary canvas art with modern design elements and neutral tones."
    },
    {
      id: 6,
      title: "Hand Drawn Portrait",
      category: "drawings",
      price: "$599",
      image: artwork6,
      description: "Expertly hand-drawn portrait artwork created with precision and artistic flair."
    }
  ]

  const categories = [
    { id: 'all', name: 'All Artworks' },
    { id: 'abstract', name: 'Abstract' },
    { id: 'prints', name: 'Prints' },
    { id: 'drawings', name: 'Hand Drawn' },
    { id: 'sets', name: 'Sets' }
  ]

  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: 'var(--artsy-dark-teal)' }}
          >
            Our Art Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of premium wall art, 
            from abstract masterpieces to hand-drawn portraits.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'text-white shadow-lg'
                  : 'text-gray-700 bg-white hover:bg-gray-50 border border-gray-200'
              }`}
              style={{
                backgroundColor: filter === category.id ? 'var(--artsy-aquamarine)' : undefined
              }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Artwork Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredArtworks.map((artwork) => (
              <motion.div
                key={artwork.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative group">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      onClick={() => setSelectedArtwork(artwork)}
                      className="opacity-0 group-hover:opacity-100 bg-white rounded-full p-3 shadow-lg transition-all duration-300"
                    >
                      <ZoomIn className="w-6 h-6" style={{ color: 'var(--artsy-dark-teal)' }} />
                    </motion.button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ color: 'var(--artsy-dark-teal)' }}
                  >
                    {artwork.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {artwork.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-2xl font-bold"
                      style={{ color: 'var(--artsy-saffron)' }}
                    >
                      {artwork.price}
                    </span>
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <ShoppingCart className="w-5 h-5" style={{ color: 'var(--artsy-aquamarine)' }} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal for artwork details */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedArtwork(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedArtwork(null)}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8">
                    <img
                      src={selectedArtwork.image}
                      alt={selectedArtwork.title}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div className="p-8">
                    <h2 
                      className="text-3xl font-bold mb-4"
                      style={{ color: 'var(--artsy-dark-teal)' }}
                    >
                      {selectedArtwork.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {selectedArtwork.description}
                    </p>
                    <div className="mb-6">
                      <span 
                        className="text-4xl font-bold"
                        style={{ color: 'var(--artsy-saffron)' }}
                      >
                        {selectedArtwork.price}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <Button 
                        className="w-full py-3 text-lg font-semibold text-white rounded-lg"
                        style={{ backgroundColor: 'var(--artsy-dark-teal)' }}
                      >
                        Add to Cart
                        <ShoppingCart className="ml-2 w-5 h-5" />
                      </Button>
                      
                      <Button 
                        variant="outline"
                        className="w-full py-3 text-lg font-semibold rounded-lg border-2"
                        style={{ borderColor: 'var(--artsy-aquamarine)', color: 'var(--artsy-aquamarine)' }}
                      >
                        Add to Wishlist
                        <Heart className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SamplesPage

