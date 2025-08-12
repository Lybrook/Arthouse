import React, { useState, useEffect } from 'react'
import { Switch } from './ui/switch'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="flex items-center space-x-3 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {isDark ? '🌙' : '☀️'}
      </span>
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-[#00cc99] data-[state=unchecked]:bg-[#ff9900]"
      />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </div>
  )
}

export default ThemeToggle

