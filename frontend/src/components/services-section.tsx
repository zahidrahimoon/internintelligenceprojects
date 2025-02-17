"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Cloud, Shield, Smartphone, Gauge, Share2, Database, Network } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Web development ensures optimal website functionality and accessibility through creation and maintenance",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud services provide scalable infrastructure for efficient data storage and processing",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Cybersecurity measures protect digital assets from unauthorized access and potential threats",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Responsive design ensures a seamless user experience across diverse devices and screen sizes",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Performance optimization ensures fast loading times and efficient resource utilization",
  },
  {
    icon: Share2,
    title: "Content Management",
    description: "Content management systems streamline content creation, editing, and publishing processes",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Database management ensures efficient data storage, retrieval, and analysis for informed decision-making",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "Network infrastructure setup and maintenance ensure reliable connectivity and data exchange",
  },
]

export function ServicesSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-4">My SERVICES</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-purple-50">
                    <service.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

