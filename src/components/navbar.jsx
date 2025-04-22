"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          AI Resume
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-400">Dashboard</Link>
          <Link href="/resume" className="hover:text-blue-400">Resume</Link>
          <Link href="/interview" className="hover:text-blue-400">Interview</Link>
        
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2">
          <Link href="/" className="hover:text-blue-400">Dashboard</Link>
          <Link href="/resume" className="hover:text-blue-400">Resume</Link>
          <Link href="/interview" className="hover:text-blue-400">Interview</Link>
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;
