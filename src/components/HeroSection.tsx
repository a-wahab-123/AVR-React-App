import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

// Hero Section Component
const HeroSection = () => {
  return (
    <section className=" flex md:min-h-screen lg:min-h-screen justify-center py-5 ">
        {/* ✨ Floating Shapes Background Layer */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="absolute w-24 h-24 border rounded-full top-10 left-10 border-cyan-400/40 animate-pulse" />
    <div className="absolute w-4 h-4 bg-cyan-600 rounded-full top-[20%] left-[70%] opacity-50 blur-sm animate-bounce" />
    <div className="absolute w-6 h-6 border border-blue-500 top-[50%] left-[70%] rounded-sm animate-ping" />
    <div className="absolute w-8 h-8 border border-blue-500 bottom-10 right-20 rounded-md blur-sm opacity-30" />
    <div className="absolute w-10 h-10 border border-cyan-500 bottom-[25%] left-[20%] rounded-full animate-move" />
    <div className="absolute w-10 h-10 border border-cyan-500 bottom-[20%] left-[10%] rounded-full animate-move" />
  </div>
      <div className="text-center space-y-6 mx-5 overflow-hidden">
        <div className="w-70 h-10 pill mb-6 bg-gradient-to-r from-blue-900 via-cyan-500 to-emerald-500 text-white animate-gradient-shift transition-all duration-300 cursor-pointer relative overflow-hidden animate-slide-in-up rounded-full px-6 py-2 inline-flex items-center text-sm"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-brain inline-block mr-2 h-3 w-3 animate-pulse"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles inline-block mr-1 h-3 w-3"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>Advanced AI &amp; IT Solutions</div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Next-gen <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-500animate-slide bg-clip-text text-transparent">AI Services</span><br />for Growth
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
          AVRDigital Infotech Founded to deliver cutting-edge web, mobile, and technology solutions, we focus on empowering your business as it scales. Our skilled engineers, imaginative designers, and strategic consultants work in harmony to drive outstanding outcomes. Connect with us today to elevate your digital reach through targeted marketing, create powerful applications, and ensure seamless performance with expert DevOps services. Together, we'll turn your vision into reality and build tomorrow's digital success.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="group relative inline-flex items-center gap-3 px-8 py-7 text-md font-semibold text-white rounded-sm bg-gradient-to-r from-blue-600 to-blue-500 hover:scale-105 transition-all duration-300 shadow-lg"
            asChild
          >
            <a href="#services">
              Explore Services
              <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className='px-8 py-7 text-md z-100' asChild>
            <a href="#connect">
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
