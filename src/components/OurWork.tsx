
import {
  sectionTitle,
} from './ui/navigation-menu'
import ProjectCard from './ProjectCard'
import ecommerceImage from '../assets/ecommerce.png'
import instagramImage from '../assets/instagram.png'
import ai_chat_bot from '../assets/ai_chat_bot.png'
import ai_solution from '../assets/ai_solution.png'
import flower from '../assets/flower.png'
import xbox from '../assets/xbox.png'
import btcLightning from '../assets/btcLightning.png'
import casino from '../assets/casino.png'

// Hero Section Component
const OurWork = () => {
  return (
    <>
      <section className="min-h-screen justify-center py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900/30 relative overflow-hidden">
        <div className="text-center space-y-6 mb-3">
          <div className="flex flex-col">
            <div className="w-28 m-auto pill mb-6 bg-gradient-to-r from-blue-900 via-cyan-500 to-emerald-500 text-white animate-gradient-shift transition-all duration-300 cursor-pointer relative overflow-hidden animate-slide-in-up rounded-full px-6 py-2 inline-flex items-center text-sm">Our Work</div>
            <h1 className={`${sectionTitle()}`}>
              Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h1>
          </div>

          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Explore our portfolio of innovative solutions that have helped businesses transform and grow with cutting-edge technology.
          </p>

        </div>
          <div className="flex flex-col py-15">
            <h1 className={`${sectionTitle("text-3xl")}`}>
              Website <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-500 bg-clip-text text-transparent">Development</span>
            </h1>
          </div>
        {/* Transforming Ideas Section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">

          <ProjectCard
            image={casino}
            title="Sweepstakes Gaming Platform"
            description="Interactive sweepstakes-based gaming portal with chat, task rewards, in-game wallets, and secure purchase options. Fully gamified UI with leaderboard and provider-based filtering."
            technologies={["Vue.js", "Laravel", "Socket.io", "Tailwind","Stripe"]}
            projectLink="https://example.com/ai-bot"
            imageAlt="Sweepstakes Gaming Platform"
          />

          <ProjectCard
            image={ecommerceImage}
            title="E-Commerce Platform"
            description="Sustainable food delivery platform with subscription services and personalized meal planning features."
            technologies={["React", "Node.js", "Ecommerce", "Subscription"]}
            projectLink="https://example.com/ ecommerce"
            imageAlt="E-Commerce Platform"
          />

          <ProjectCard
            image={xbox}
            title="Game Launcher Interface (Xbox Style)"
            description="Modern gaming dashboard UI showcasing library management, storefront integration, friend activity, and personalized game shelves—crafted for console-level UX"
            technologies={["React", "TailwindCSS", "Framer Motion", "GraphQL"]}
            projectLink="https://example.com/wallet"
            imageAlt="Game Launcher Interface (Xbox Style)"
          />

        </div>
          <div className="flex flex-col py-15">
            <h1 className={`${sectionTitle("text-3xl")}`}>
              Mobile App <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-500 bg-clip-text text-transparent">Development</span>
            </h1>
          </div>
        {/* Transforming Ideas Section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">

          <ProjectCard
            image={btcLightning}
            title="BTCLightning Wallet App"
            description="A secure crypto wallet designed for instant microtransactions using the Lightning Network. Features real-time payment tracking, authentication, and transaction history.."
            technologies={["Next.js", "React Native", "Lightning API", "TailwindCSS"]}
            projectLink="https://example.com/ai-bot"
            imageAlt="BTCLightning Wallet App"
          />

        </div>
          <div className="flex flex-col py-15">
            <h1 className={`${sectionTitle("text-3xl")}`}>
              Additional <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-500 bg-clip-text text-transparent">Solutions</span>
            </h1>
          </div>
        {/* Transforming Ideas Section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">

          <ProjectCard
            image={ai_chat_bot}
            title="RAG-Based Agriculture Knowledge System"
            description="An intelligent agricultural assistant that uses Retrieval-Augmented Generation (RAG) to provide real-time recommendations on soil health, crop diseases, government schemes, and weather-based farming advice."
            technologies={["GPT-4", "FAISS", "LangChain","FastAPI","MongoDB"]}
            projectLink="https://example.com/ai-bot"
            imageAlt="RAG-Based Agriculture Knowledge System"
          />

          <ProjectCard
            image={ai_solution}
            title="Autonomous AI Agent for Smart Farming"
            description="An advanced AI agent trained with reinforcement learning (PPO, DQN) to automate farm monitoring, business workflows, and industrial tasks through intelligent simulation and reasoning."
            technologies={["Reinforcement Learning", "OpenAI Gym", "Unity ML","LangChain","PyTorch"]}
            projectLink="https://example.com/ecommerce"
            imageAlt="Autonomous AI Agent for Smart Farming"
          />
          <ProjectCard
            image={flower}
            title="AI-Based Gardening Flower Generator"
            description="A diffusion-based AI system that creates realistic gardening and floral arrangement visuals based on user prompts—ideal for landscaping previews and virtual nurseries."
            technologies={["Stable Diffusion", "DreamBooth", "ControlNet","OpenCV","Hugging Face"]}
            projectLink="https://example.com/ecommerce"
            imageAlt="AI-Based Gardening Flower Generator"
          />

        </div>
      </section>

    </>
  )
}

export default OurWork;
