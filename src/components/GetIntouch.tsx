import { Input } from './ui/input';
import { Card, CardContent, CardTitle } from './ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select"
import { sectionTitle } from './ui/navigation-menu'
import { Label } from './ui/Label';
import { Textarea } from './ui/Textarea';

const GetIntouch = () => {
  return (
    <section className="min-h-screen justify-center py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900/30 relative overflow-hidden">

      <div className="text-center py-6 space-y-6 mb-3">
        <div className="flex flex-col">
          <div className="w-max m-auto pill mb-6 bg-gradient-to-r from-blue-900 via-cyan-500 to-emerald-500 text-white animate-gradient-shift transition-all duration-300 cursor-pointer relative overflow-hidden animate-slide-in-up rounded-full px-6 py-2 inline-flex items-center text-sm">Get In Touch
          </div>
          <h1 className={`${sectionTitle()}`}>
            Connect <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-500 bg-clip-text text-transparent">With Us</span>
          </h1>

        </div>
        <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">Ready to transform your business with our IT services? Reach out to discuss how we can help you achieve your goals.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6 max-w-7xl mx-auto p-4">
        <Card>
          <CardContent className="p-6 space-y-6">
            <h1 className='text-lg font-bold'>Send Us a Message</h1>

            {/* 50-50 Split Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input type="text" placeholder="Name" id="name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" placeholder="Email" id="email" />
              </div>
            </div>

            {/* Service Interested In - Full Width */}
            <div className="space-y-2">
              <Label htmlFor="service">Service Interested In</Label>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Services" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">AI Project Development</SelectItem>
                  <SelectItem value="dark">Website Development</SelectItem>
                  <SelectItem value="system">Application Development</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message - Full Width */}
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project or question..."
              />
            </div>

            {/* Send Message Button */}
            <button type='submit' className="w-full bg-gradient-to-r from-blue-800 to-cyan-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center gap-2">
              Send Message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

          </CardContent>
        </Card>

        {/* Contact Information Card */}
        <Card>
          <CardContent className="p-6 space-y-6">
            <h1 className='text-lg font-bold'>Contact Information</h1>

            {/* Email Us */}
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-900 via-cyan-500 to-emerald-500 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-sm text-muted-foreground">Email Us</h3>
                <p className="text-sm">info@avrdigitalinfotech.com</p>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-900 via-cyan-500 to-emerald-500 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-sm text-muted-foreground">Call Us</h3>
                <p className="text-sm">+91 000000000</p>
              </div>
            </div>

            {/* Visit Us */}
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-900 via-cyan-500 to-emerald-500 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-sm text-muted-foreground">Our Location</h3>
                <p className="text-sm">Patna, India</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border"></div>

            {/* Follow Us */}
            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <div className="p-2 bg-muted hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 rounded-lg transition-all duration-300 cursor-pointer group">
                  <svg className="w-5 h-5 text-muted-foreground group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="p-2 bg-muted hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 rounded-lg transition-all duration-300 cursor-pointer group">
                  <svg className="w-5 h-5 text-muted-foreground group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </div>
                <div className="p-2 bg-muted hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 rounded-lg transition-all duration-300 cursor-pointer group">
                  <svg className="w-5 h-5 text-muted-foreground group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </div>
                <div className="p-2 bg-muted hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 rounded-lg transition-all duration-300 cursor-pointer group">
                  <svg className="w-5 h-5 text-muted-foreground group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>


    </section>
  )
}
export default GetIntouch;