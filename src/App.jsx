import { useState } from 'react'
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

  return (
    <div className="App min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Advanced Animation Layers */}
      <MatrixRain />
      <ParticleSystem />
      <FloatingElements />
      
      {/* Futuristic Background */}
      <div 
        className="fixed inset-0 opacity-20 dark:opacity-30 bg-cover bg-center bg-no-repeat parallax-bg"
        style={{
          backgroundImage: `url('/src/assets/futuristic-bg.jpg')`,
          filter: 'blur(1px)',
          zIndex: -3
        }}
      />
      
      {/* Enhanced Animated geometric shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#00cc99]/20 to-[#ff9900]/20 rounded-full energy-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-[#597931]/20 to-[#003300]/20 rounded-full parallax-element"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-[#ff9900]/20 to-[#00cc99]/20 rounded-full energy-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-[#003300]/20 to-[#597931]/20 rounded-full parallax-element" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Data stream elements */}
        <div className="absolute top-0 left-1/4 w-1 h-20 bg-gradient-to-b from-[#00cc99] to-transparent data-stream-element"></div>
        <div className="absolute top-0 right-1/3 w-1 h-16 bg-gradient-to-b from-[#ff9900] to-transparent data-stream-element" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 left-3/4 w-1 h-24 bg-gradient-to-b from-[#597931] to-transparent data-stream-element" style={{ animationDelay: '1s' }}></div>
      </div>

      <Navigation onNavigate={handleNavigation} />
      
      {currentPage === 'home' && (
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
      )}
      
      {currentPage === 'samples' && (
        <>
          <SamplesPage />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App

