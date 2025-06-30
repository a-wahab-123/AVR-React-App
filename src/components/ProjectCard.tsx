import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  image: string
  title: string
  description: string
  technologies: string[]
  projectLink: string
  imageAlt?: string
}

const ProjectCard = ({ 
  image, 
  title, 
  description, 
  technologies, 
  projectLink, 
  imageAlt = "Project Image" 
}: ProjectCardProps) => {
  return (
    <Card className='rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-md hover:border-cyan-400/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-400/20 overflow-hidden group animate-fade-in cursor-pointer hover-lift relative'>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl animate-gradient-shift"></div>
      
      <CardContent className='p-5 space-y-3'>
        <div className="relative overflow-hidden before:absolute before:top-0 before:rounded-lg before:left-0 before:w-full before:h-full before:z-20 before:pointer-events-none before:bg-gradient-to-t before:from-black before:to-transparent">
          <img 
            className="h-50 w-full rounded-lg object-cover group-hover:brightness-110" 
            src={image} 
            alt={imageAlt} 
          />
          <div className="absolute bottom-3 right-3 bg-gradient-to-r from-cyan-400/80 to-blue-500/80 backdrop-blur-sm p-3 rounded-full transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 animate-glow-pulse z-21">
            <ExternalLink className="h-5 w-5 text-white" />
          </div>
        </div>
        
        <h1 className='text-xl font-bold mb-3 text-white bg-gradient-to-r 
         group-hover:from-blue-500 group-hover:to-cyan-400
         group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 transform group-hover:scale-105'>
          {title}
        </h1>
        
        <p className='text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300'>
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge 
              key={index}
              className='text-xs px-3 py-1 bg-white/10 text-gray-300 rounded-full border border-white/10 transition-all duration-300 cursor-pointer' 
              variant="outline"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <a 
          href={projectLink}
          className="group transition-all duration-300 text-cyan-400 text-sm font-medium inline-flex items-center"
        >
          View Project
          <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
