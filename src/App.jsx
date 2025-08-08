import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import SamplesPage from './components/SamplesPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="App">
      <Navigation onNavigate={handleNavigation} />
      
      {currentPage === 'home' && (
        <>
          <HeroSection onNavigate={handleNavigation} />
          <AboutSection />
          <ContactSection />
        </>
      )}
      
      {currentPage === 'samples' && (
        <SamplesPage />
      )}
    </div>
  )
}

export default App

