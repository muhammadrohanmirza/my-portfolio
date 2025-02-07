'use client'

import React from 'react'

const Skills = () => {
    const skills = [
        { name: "Frontend Development", level: 90 },
        { name: "Backend Development", level: 50 },
        { name: "UI/UX Design", level: 80 },
        { name: "Graphic Designer", level: 85 },
        { name: "Cloud Services", level: 20 },
        { name: "AI", level: 40 }
      ];
  return (
<>
       {/* Skills Section */}
     <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.2),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
                <div className="flex justify-between mb-2">
                  <span className="text-lg text-gray-300">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills