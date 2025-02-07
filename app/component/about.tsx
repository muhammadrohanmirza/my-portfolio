'use client'
import React from 'react'

const About = () => {
  return (
    
    <>
      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.2),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700">
            <p className="text-gray-300 leading-relaxed text-lg">
            I am a proficient front-end developer with expertise in building responsive, high-quality websites. 
            Through the Governor Sindh Initiative on Agentic AI, 
            I am learning about Agentic AI while pursuing an Intermediate of Science in Artificial Intelligence at Jinnah College.
             I have a strong interest in leveraging technology to develop creative solutions and have a beneficial influence.
            </p>

          </div>
        </div>
      </section>
    </>
  )
}

export default About