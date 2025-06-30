import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../components/ui/navigation-menu'
import stgLogo from '../assets/logo.png'

// Header Component
const Header = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'clients', 'connect']
      const scrollPosition = window.scrollY + 100 // Offset for header height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="px-4 m-5 border rounded-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-[10px] z-50">
      <div className="container w-full flex  items-center justify-between p-auto md:py-8">
        {/* Desktop Left Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('home')
                  }}
                  className={navigationMenuTriggerStyle()}
                  data-active={activeSection === 'home' ? 'true' : 'false'}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('about')
                  }}
                  className={navigationMenuTriggerStyle()}
                  data-active={activeSection === 'about' ? 'true' : 'false'}
                >
                  About AVR
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('services')
                  }}
                  className={navigationMenuTriggerStyle()}
                  data-active={activeSection === 'services' ? 'true' : 'false'}
                >
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Center Logo */}
        <div className="flex items-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/50 to-primary/50 blur-xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
            </div>
            <div className="relative z-10">
              <img src={stgLogo} alt="AVR Logo" className="h-[100px] w-[100px] object-contain transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
        </div>

        {/* Desktop Right Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('projects')
                  }}
                  className={navigationMenuTriggerStyle()}
                  data-active={activeSection === 'projects' ? 'true' : 'false'}
                >
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('clients')
                  }}
                  className={navigationMenuTriggerStyle()}
                  data-active={activeSection === 'clients' ? 'true' : 'false'}
                >
                  Clients
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('connect')
                  }}
                  className={navigationMenuTriggerStyle()}
                  data-active={activeSection === 'connect' ? 'true' : 'false'}
                >
                  Connect
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="lg:hidden p-2 rounded-md border border-cyan-400/30 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 hover:from-cyan-400/20 hover:to-blue-500/20 transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-background/95 backdrop-blur border rounded-lg shadow-lg">
          <div className="p-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className={`w-full text-left px-4 py-3 rounded-md transition-all duration-300 ${activeSection === 'home'
                  ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-white border-l-4 border-cyan-400'
                  : 'text-white hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-blue-500/10'
                }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`w-full text-left px-4 py-3 rounded-md transition-all duration-300 ${activeSection === 'about'
                  ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-white border-l-4 border-cyan-400'
                  : 'text-white hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-blue-500/10'
                }`}
            >
              About AVR
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`w-full text-left px-4 py-3 rounded-md transition-all duration-300 ${activeSection === 'services'
                  ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-white border-l-4 border-cyan-400'
                  : 'text-white hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-blue-500/10'
                }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`w-full text-left px-4 py-3 rounded-md transition-all duration-300 ${activeSection === 'projects'
                  ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-white border-l-4 border-cyan-400'
                  : 'text-white hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-blue-500/10'
                }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('clients')}
              className={`w-full text-left px-4 py-3 rounded-md transition-all duration-300 ${activeSection === 'clients'
                  ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-white border-l-4 border-cyan-400'
                  : 'text-white hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-blue-500/10'
                }`}
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection('connect')}
              className={`w-full text-left px-4 py-3 rounded-md transition-all duration-300 ${activeSection === 'connect'
                  ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-white border-l-4 border-cyan-400'
                  : 'text-white hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-blue-500/10'
                }`}
            >
              Connect
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
