import React from 'react'
import { motion } from 'framer-motion'

const FloatingElements = () => {
  const elements = [
    { id: 1, size: 'w-16 h-16', color: 'from-[#ff9900] to-[#00cc99]', delay: 0 },
    { id: 2, size: 'w-12 h-12', color: 'from-[#00cc99] to-[#597931]', delay: 1 },
    { id: 3, size: 'w-20 h-20', color: 'from-[#597931] to-[#003300]', delay: 2 },
    { id: 4, size: 'w-8 h-8', color: 'from-[#003300] to-[#ff9900]', delay: 0.5 },
    { id: 5, size: 'w-14 h-14', color: 'from-[#ff9900] to-[#597931]', delay: 1.5 },
    { id: 6, size: 'w-10 h-10', color: 'from-[#00cc99] to-[#003300]', delay: 2.5 },
  ]

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const positions = [
    { top: '10%', left: '5%' },
    { top: '20%', right: '8%' },
    { top: '60%', left: '3%' },
    { top: '70%', right: '5%' },
    { top: '40%', left: '90%' },
    { top: '80%', left: '85%' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
      {elements.map((element, index) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.size} bg-gradient-to-br ${element.color} rounded-full opacity-30 blur-sm`}
          style={positions[index]}
          variants={floatingVariants}
          animate="animate"
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            delay: element.delay,
            duration: 1,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-24 h-24 border-2 border-[#00cc99] opacity-20"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-32 h-32 border border-[#ff9900] opacity-15"
        animate={{
          rotate: -360,
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
      />
    </div>
  )
}

export default FloatingElements

