import { Github, Twitter, Instagram, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">AVR Digital Infotech.</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Transforming businesses through innovative IT solutions and AI-powered services.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-lg transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-lg transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-lg transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-lg transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Project Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Application Development
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-white">Email:</span> info@avrdigitalinfotech.com
              </p>
              <p className="text-gray-400">
                <span className="text-white">Phone:</span> +91 00000000
              </p>
              <div className="text-gray-400">
                <span className="text-white">Address: </span>
                Patna, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 AVR Digital Infotech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
