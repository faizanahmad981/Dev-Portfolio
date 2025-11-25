'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-800">PortfolioPulse</span>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden lg:flex gap-8 items-center">
          <ul className="flex space-x-8 text-lg font-semibold">
            <li><Link href="#home" className="text-black hover:text-[#0072ff]">HOME</Link></li>
            <li><Link href="#about" className="text-black hover:text-[#0072ff]">ABOUT</Link></li>
            <li><Link href="#education" className="text-black hover:text-[#0072ff]">EDUCATION</Link></li>
            <li><Link href="#services" className="text-black hover:text-[#0072ff]">SERVICES</Link></li>
            <li><Link href="#technical-skills" className="text-black hover:text-[#0072ff]">SKILLS</Link></li>
            <li><Link href="#portfolio" className="text-black hover:text-[#0072ff]">PROJECTS</Link></li>
            <li><Link href="#blog" className="text-black hover:text-[#0072ff]">BLOG</Link></li>
            <li><Link href="#contact" className="text-black hover:text-[#0072ff]">CONTACT</Link></li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-gray-700 text-2xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden p-4">
            <ul className="flex flex-col gap-4 text-lg font-semibold">
              <li><Link href="#home" className="text-black hover:text-[#0072ff]">HOME</Link></li>
              <li><Link href="#about" className="text-black hover:text-[#0072ff]">ABOUT</Link></li>
              <li><Link href="#education" className="text-black hover:text-[#0072ff]">EDUCATION</Link></li>
              <li><Link href="#services" className="text-black hover:text-[#0072ff]">SERVICES</Link></li>
              <li><Link href="#technical-skills" className="text-black hover:text-[#0072ff]">SKILLS</Link></li>
              <li><Link href="#portfolio" className="text-black hover:text-[#0072ff]">PROJECTS</Link></li>
              <li><Link href="#blog" className="text-black hover:text-[#0072ff]">BLOG</Link></li>
              <li><Link href="#contact" className="text-black hover:text-[#0072ff]">CONTACT</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
