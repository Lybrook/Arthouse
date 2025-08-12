import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare, Sparkles } from 'lucide-react'

const EnhancedContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : ''
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return !emailRegex.test(value) ? 'Please enter a valid email address' : ''
      case 'subject':
        return value.length < 3 ? 'Subject must be at least 3 characters' : ''
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : ''
      default:
        return ''
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Real-time validation
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 3000)
    }
  }

  const inputVariants = {
    focused: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(0, 204, 153, 0.3)",
      transition: { duration: 0.2 }
    },
    unfocused: {
      scale: 1,
      boxShadow: "0 0 0 0px rgba(0, 204, 153, 0)",
      transition: { duration: 0.2 }
    }
  }

  const FormField = ({ name, type = "text", placeholder, icon: Icon, isTextarea = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
        <motion.div
          variants={inputVariants}
          animate={focusedField === name ? "focused" : "unfocused"}
          className="relative"
        >
          {isTextarea ? (
            <textarea
              name={name}
              value={formData[name]}
              onChange={handleInputChange}
              onFocus={() => setFocusedField(name)}
              onBlur={() => setFocusedField(null)}
              placeholder={placeholder}
              rows={5}
              className="w-full pl-12 pr-4 py-4 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-gray-700/30 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#00cc99]/50 transition-all duration-300 resize-none"
            />
          ) : (
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleInputChange}
              onFocus={() => setFocusedField(name)}
              onBlur={() => setFocusedField(null)}
              placeholder={placeholder}
              className="w-full pl-12 pr-4 py-4 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-gray-700/30 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#00cc99]/50 transition-all duration-300"
            />
          )}
        </motion.div>
      </div>
      
      <AnimatePresence>
        {errors[name] && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center mt-2 text-red-500 text-sm"
          >
            <AlertCircle className="w-4 h-4 mr-2" />
            {errors[name]}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )

  if (isSubmitted) {
    return (
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-center bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-3xl p-12 border border-white/20 dark:border-gray-700/30"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-r from-[#00cc99] to-[#ff9900] rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#ff9900] to-[#003300] bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your vision into digital reality? Get in touch and let's discuss your next masterpiece.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 dark:border-gray-700/30 shadow-2xl"
        >
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00cc99]/5 via-transparent to-[#ff9900]/5 rounded-3xl" />
          <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-[#00cc99] to-[#ff9900] rounded-full opacity-20 blur-xl animate-pulse" />
          <div className="absolute bottom-6 left-6 w-8 h-8 bg-gradient-to-r from-[#ff9900] to-[#597931] rounded-full opacity-20 blur-lg animate-pulse" style={{ animationDelay: '1s' }} />

          <form onSubmit={handleSubmit} className="relative space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                name="name"
                placeholder="Your Full Name"
                icon={User}
              />
              <FormField
                name="email"
                type="email"
                placeholder="your.email@example.com"
                icon={Mail}
              />
            </div>

            <FormField
              name="subject"
              placeholder="Project Subject"
              icon={Sparkles}
            />

            <FormField
              name="message"
              placeholder="Tell us about your vision, requirements, and any specific details..."
              icon={MessageSquare}
              isTextarea={true}
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 px-8 bg-gradient-to-r from-[#00cc99] to-[#ff9900] text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-[#00cc99]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cyber-button relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div
                    key="submitting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center"
                  >
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                    Sending Message...
                  </motion.div>
                ) : (
                  <motion.div
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-3" />
                    Send Message
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </form>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#00cc99] to-[#ff9900] rounded-lg opacity-30"
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-[#ff9900] to-[#597931] rounded-full opacity-30"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedContactForm

