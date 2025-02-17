"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import pic from '@/app/assests/bloog.jpg'

export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src='https://res.cloudinary.com/dxichwcfj/image/upload/v1736267844/me_zlfvcf.png'
              alt="Vision Illustration"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Muhammad Zahid
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl font-semibold text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              MERN Stack Developer
            </motion.p>

            <motion.p
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
             I am a skilled MERN stack developer with hands-on experience from various internships and open-source contributions. My expertise in MongoDB, Express, React, and Node.js enables me to build robust, scalable applications tailored to unique client needs. Passionate about creating impactful solutions, I continuously strive for growth by staying updated with industry trends. I thrive in collaborative environments, working effectively with dynamic teams to solve complex challenges with innovative approaches. My problem-solving skills and commitment to excellence drive me to deliver high-quality projects.
            </motion.p>

            <motion.p
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I believe that continuous learning and adaptability are key to staying ahead in the ever-evolving tech industry. My journey as a developer is driven by curiosity, innovation, and a passion for crafting seamless user experiences.
            </motion.p>

            <motion.blockquote
              className="text-gray-600 leading-relaxed italic font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              "Success is not just about writing code; it's about creating solutions that inspire and make a difference."
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">MORE ABOUT US</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

