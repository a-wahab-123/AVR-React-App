
import { Card, CardContent } from './ui/card'
import { CheckCircle, Lightbulb, TrendingUp, Users, Code } from 'lucide-react'
import {
  sectionTitle,
} from '../components/ui/navigation-menu'

// Hero Section Component
const About = () => {
  return (
    <>
      <section className="min-h-screen justify-center py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900/30 relative overflow-hidden">
        <div className="text-center space-y-6 mb-3">
          <div className="flex flex-col">
            <div className="w-28 m-auto pill mb-6 bg-gradient-to-r from-blue-900 via-cyan-500 to-emerald-500 text-white animate-gradient-shift transition-all duration-300 cursor-pointer relative overflow-hidden animate-slide-in-up rounded-full px-6 py-2 inline-flex items-center text-sm">About Us</div>
            <h1 className={`${sectionTitle()}`}>
              Who We <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-500 bg-clip-text text-transparent">Are</span>
            </h1>
          </div>

          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Founded to create mobile and web software and to provide development support.
            Enhanced team size, refined expertise, attracted remote client with superior work.
            The creative strategy attracted interest and won the software sector kudos.
            Ventured into digital marketing and SaaS, significantly increasing capabilities.
            Became well-known as a SaaS expert, exhibiting consistent growth.          </p>

        </div>

        {/* Transforming Ideas Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 mx-10 sm:mx-5">
          {/* Left Side - Main Content */}
          <div className="space-y-8">
            <h1 className='text-2xl lg:text-2xl font-bold leading-tight'>
              Transforming Ideas into <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-500 bg-clip-text text-transparent'>Powerful Solutions</span>
            </h1>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Founded with a vision to bridge the gap between cutting-edge technology and business needs, AVR has grown into a trusted partner for companies seeking digital transformation.
            </p>

            {/* Key Points */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-md mb-2">Excellence in Delivery</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We pride ourselves on delivering high-quality solutions on time and within budget.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-md mb-2">Client-Focused Approach</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Your success is our success. We work closely with you to understand your unique challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-md mb-2">Innovative Technologies</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We leverage the latest technologies to build future-proof solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 ">
            {/* Innovation Card */}
            <Card className="bg-background/50 border-background-500/20 hover:border-blue-500/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-blue-500/20">
                    <Lightbulb className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-3">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Pushing boundaries with creative approaches to complex problems
                </p>
              </CardContent>
            </Card>

            {/* Growth Card */}
            <Card className="bg-background/50 border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-cyan-400/20">
                    <TrendingUp className="h-8 w-8 text-cyan-400" />
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-3">Growth</h3>
                <p className="text-muted-foreground text-sm">
                  Scaling solutions that grow with your business needs
                </p>
              </CardContent>
            </Card>

            {/* Collaboration Card */}
            <Card className="bg-background/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-blue-500/20">
                    <Users className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-3">Collaboration</h3>
                <p className="text-muted-foreground text-sm">
                  Working together to achieve remarkable results
                </p>
              </CardContent>
            </Card>

            {/* Expertise Card */}
            <Card className="bg-background/50 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-orange-500/20">
                    <Code className="h-8 w-8 text-orange-400" />
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-3">Expertise</h3>
                <p className="text-muted-foreground text-sm">
                  Deep knowledge across technologies and domains
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </>
  )
}

export default About
