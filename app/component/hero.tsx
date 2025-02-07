'use client'

import React from 'react'
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

const heroSection = () => {

  

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
{/* Hero Section */}
<section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_70%)]"></div>
  <div className="max-w-7xl mx-auto text-center relative z-10">
    <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
      Hi, I am Rohan Mirza
    </h1>
    <p className="text-xl sm:text-2xl text-gray-300 mb-8">
      Crafting Digital Experiences Through Code
    </p>
    {/* Updated responsive buttons */}
    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 px-4">
      <Link href='/#projects'>
      <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center space-x-2 transform hover:scale-105 transition-all w-full sm:w-auto">
        <span>View Projects</span>
        <ArrowRight size={20} />
      </button>
      </Link>
      <Link href="/My Resume.pdf" target="_blank">
      <button className="px-8 py-3 border border-blue-400 hover:bg-blue-400/10 rounded-full flex items-center justify-center space-x-2 transform hover:scale-105 transition-all w-full sm:w-auto">
        <span>Download CV</span>
        <Download size={20} />
      </button>
      </Link>
    </div>
    <div className="flex justify-center space-x-6">
      <Link href="https://github.com/muhammadrohanmirza" target="_blank" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all">
        <Github size={28} />
      </Link>
      <Link href="https://www.linkedin.com/in/muhammad-rohan-mirza/" target="_blank" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all">
        <Linkedin size={28} />
      </Link>
      <Link href="mailto:m.rohanmirza2007@gmail.com"  className="text-gray-400 hover:text-white transform hover:scale-110 transition-all">
        <Mail size={28} />
      </Link>
    </div>
  </div>
</section>
      </div>
  )
}

export default heroSection