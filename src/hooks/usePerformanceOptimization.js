import { useEffect, useState, useCallback } from 'react'

export const usePerformanceOptimization = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [isLowPerformance, setIsLowPerformance] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)

    const handleChange = (e) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)

    // Performance detection
    const detectPerformance = () => {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
      const memory = navigator.deviceMemory
      const cores = navigator.hardwareConcurrency

      // Low performance indicators
      const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')
      const isLowMemory = memory && memory < 4
      const isLowCores = cores && cores < 4

      if (isSlowConnection || isLowMemory || isLowCores) {
        setIsLowPerformance(true)
      }
    }

    detectPerformance()

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const optimizeAnimation = useCallback((animation) => {
    if (isReducedMotion || isLowPerformance) {
      return {
        ...animation,
        duration: 0.1,
        transition: { duration: 0.1 }
      }
    }
    return animation
  }, [isReducedMotion, isLowPerformance])

  const shouldRenderParticles = !isLowPerformance
  const shouldRenderComplexAnimations = !isReducedMotion && !isLowPerformance

  return {
    isReducedMotion,
    isLowPerformance,
    optimizeAnimation,
    shouldRenderParticles,
    shouldRenderComplexAnimations
  }
}

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [ref, setRef] = useState(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1, ...options }
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, options])

  return [setRef, isIntersecting]
}

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

export const useThrottle = (callback, delay) => {
  const [isThrottled, setIsThrottled] = useState(false)

  const throttledCallback = useCallback((...args) => {
    if (!isThrottled) {
      callback(...args)
      setIsThrottled(true)
      setTimeout(() => setIsThrottled(false), delay)
    }
  }, [callback, delay, isThrottled])

  return throttledCallback
}

