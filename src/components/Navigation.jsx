import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navigation = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("home")

  const handleNavigation = (page, sectionId = null) => {
    if (onNavigate) {
      onNavigate(page)
    }
    setIsOpen(false)
    setCurrentPage(page)
    
    // Scroll to section if specified
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  const navItems = [
    { id: 'home', label: 'Home', section: 'home' },
    { id: 'samples', label: 'Samples', section: null },
    { id: 'about', label: 'About', section: 'about' },
    { id: 'contact', label: 'Contact', section: 'contact' }
  ]

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="nav-glass"
    >
      <div className="container-fluid">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            <h1 className="text-2xl font-bold text-[#264653] dark:text-[var(--artsy-teal)] transition-colors duration-300">
              Artsy
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigation(item.id === 'samples' ? 'samples' : 'home', item.section)}
                  whileHover={{ scale: 1.05 }}
                  className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden border-t border-border/50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.button 
                  key={item.id}
                  onClick={() => handleNavigation(item.id === 'samples' ? 'samples' : 'home', item.section)}
                  whileHover={{ x: 4 }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    currentPage === item.id 
                      ? 'bg-accent text-accent-foreground' 
                      : 'text-foreground hover:bg-accent/50'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="pt-2 border-t border-border/50">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation

