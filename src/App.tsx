import Header from './utils/Header'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Service from './components/Service'
import OurWork from './components/OurWork'
import TestimonialCarousel from './components/TestimonialCarousel'
import TechSlider from './components/TechSlider'
import GetIntouch from './components/GetIntouch'
import Footer from './components/Footer'



// Main App Component
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Service />
      </section>
      <section id="projects">
        <OurWork />
      </section>
      <section id="clients">
        <TestimonialCarousel />
      </section>
      <section id="tech">
        <TechSlider />
      </section>
      <section id="connect">
        <GetIntouch />
      </section>
      <Footer />
    </div>
  )
}

export default App
