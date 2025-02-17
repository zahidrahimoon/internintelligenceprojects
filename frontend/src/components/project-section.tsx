"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for managing online stores with real-time analytics, inventory management, and order processing capabilities.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/yourusername/ecommerce-dashboard",
    live: "https://ecommerce-dashboard.demo.com",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered platform that generates high-quality content for blogs, social media, and marketing materials using advanced language models.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    tech: ["Next.js", "OpenAI", "PostgreSQL", "Prisma", "shadcn/ui"],
    github: "https://github.com/yourusername/ai-content-generator",
    live: "https://ai-content-generator.demo.com",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A modern chat application with real-time messaging, file sharing, and video calls, built with WebSocket technology.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop",
    tech: ["React", "Socket.io", "Express", "Redis", "WebRTC"],
    github: "https://github.com/yourusername/realtime-chat",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of our recent projects that showcase our expertise in web development, artificial
              intelligence, and real-time applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

