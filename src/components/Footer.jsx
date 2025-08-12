import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#003300] via-[#597931] to-[#00cc99] text-white py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#ff9900] to-[#00cc99] bg-clip-text text-transparent">
              Artsy Studio
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Creating extraordinary digital art experiences with cutting-edge technology and innovative design. 
              Where creativity meets the future.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#ff9900] to-[#00cc99] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-white font-bold">A</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-[#00cc99] to-[#597931] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-white font-bold">S</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-[#597931] to-[#003300] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-white font-bold">T</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#ff9900]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#00cc99] transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00cc99] transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00cc99] transition-colors">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00cc99] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#ff9900]">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#00cc99] transition-colors">Digital Art</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00cc99] transition-colors">3D Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00cc99] transition-colors">Animation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00cc99] transition-colors">Consulting</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Artsy Studio. All rights reserved. Crafted with passion and innovation.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#00cc99] text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[#00cc99] text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-[#00cc99] text-sm transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

