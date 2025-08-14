import { useState, useMemo } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import SamplesPage from './components/SamplesPage'
import Footer from './components/Footer'
import ParticleSystem from './components/ParticleSystem'
import MatrixRain from './components/MatrixRain'
import FloatingElements from './components/FloatingElements'
import InteractiveGallery from './components/InteractiveGallery'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import ServicesShowcase from './components/ServicesShowcase'
import StatsCounter from './components/StatsCounter'
import EnhancedContactForm from './components/EnhancedContactForm'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  // Memoize background elements to prevent unnecessary re-renders
  const backgroundElements = useMemo(() => (
    <>
      {/* Advanced Animation Layers */}
      <MatrixRain />
      <ParticleSystem />
      <FloatingElements />
      
      {/* Futuristic Background */}
      <div 
        className="fixed inset-0 opacity-20 dark:opacity-30 bg-cover bg-center bg-no-repeat parallax-bg gpu-layer"
        style={{
          backgroundImage: `url('/src/assets/futuristic-bg.jpg')`,
          filter: 'blur(1px)',
          zIndex: -3
        }}
      />
      
      {/* Enhanced Animated geometric shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none gpu-layer" style={{ zIndex: -1 }}>
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[var(--artsy-teal)]/20 to-[var(--artsy-orange)]/20 rounded-full energy-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-[var(--artsy-olive)]/20 to-[var(--artsy-dark-green)]/20 rounded-full parallax-element"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-[var(--artsy-orange)]/20 to-[var(--artsy-teal)]/20 rounded-full energy-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-[var(--artsy-dark-green)]/20 to-[var(--artsy-olive)]/20 rounded-full parallax-element" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Data stream elements */}
        <div className="absolute top-0 left-1/4 w-1 h-20 bg-gradient-to-b from-[var(--artsy-teal)] to-transparent data-stream-element"></div>
        <div className="absolute top-0 right-1/3 w-1 h-16 bg-gradient-to-b from-[var(--artsy-orange)] to-transparent data-stream-element" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 left-3/4 w-1 h-24 bg-gradient-to-b from-[var(--artsy-olive)] to-transparent data-stream-element" style={{ animationDelay: '1s' }}></div>
      </div>
    </>
  ), [])

  // Memoize home page content
  const homePageContent = useMemo(() => (
    <>
      <HeroSection onNavigate={handleNavigation} />
      <InteractiveGallery />
      <ServicesShowcase />
      <AboutSection />
      <StatsCounter />
      <TestimonialsCarousel />
      <EnhancedContactForm />
      <Footer />
    </>
  ), [])

  return (
    <div className="App min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden gpu-layer">
      {backgroundElements}

      <Navigation onNavigate={handleNavigation} />
      
      <main className="relative z-10">
        {currentPage === 'home' && homePageContent}
        
        {currentPage === 'samples' && (
          <>
            <SamplesPage />
            <Footer />
          </>
        )}
      </main>
    </div>
  )
}

export default App

