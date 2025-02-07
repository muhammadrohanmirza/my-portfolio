'use client'

import React from 'react'
import {ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
const Project = () => {
    const projects = [
        {
          title: "E-commerce",
          description: "A Frontend e-commerce platform with real-time inventory and payment processing",
          image: "/ecommerce.png",
          tags: ["Next.js", "Clerkjs", "Stripe"],
          link: "https://rohan-nike-stores.vercel.app/"
        },
        {
          title: "UI/UX Design",
          description: "An intuitive, modern, and user-friendly interface.",
          image: "/design.png",
          tags: ["Next.js", "Tailwindcss", "Routing"],
          link: "https://governor-sindh-website-hazel.vercel.app/"
        },
        {
          title: "Resume Builder",
          description: "This project is for those who want to create their resumes, so create your custom resume.",
          image: "/resume.png",
          tags: ["React", "Firebase", "WebSocket"],
          link: "https://milestone-5-eight-orpin.vercel.app/"
        }
      ];
  return (
    <>
  {/* Projects Section */}
  <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} 
                   className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 transform hover:scale-105 transition-all hover:shadow-2xl">
                <Image src={project.image} alt={project.title} width={500} height={300} className=" object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                  target='_blank'
                    href={project.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 </>   
)
}

export default Project