'use client'

import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <nav className="bg-prussian-500 p-4">
        <ul className="flex items-center font-forum">
          <li className="flex items-center mr-auto">
            <Link href="/" passHref>
              <Image src="/logo.png" alt="Logo" width={64} height={64} className="h-18 w-auto pl-2 pr-6" />
            </Link>
            <h1 className="text-3xl font-bold text-white">
              Dola Re Dandiya
            </h1>
          </li>
          <li className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </li>
          <div className="hidden md:flex space-x-12 items-center">
            <li>
              <Link href="/" className="text-white hover:text-blue-200 font-semibold">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-blue-200 font-semibold">About</Link>
            </li>
            <li>
              <Link href="/current-sponsors" className="text-white hover:text-blue-200 font-semibold">Current Sponsors</Link>
            </li>
            <li>
              <Link href="/potential-sponsors" className="text-white hover:text-blue-200 font-semibold">Potential Sponsors</Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-blue-200 font-semibold pr-4">Contact Us</Link>
            </li>
          </div>
        </ul>
        {isOpen && (
          <ul className="flex flex-col space-y-4 mt-4 md:hidden font-forum">
            <li>
              <Link href="/" className="text-white hover:text-blue-200 font-semibold" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-blue-200 font-semibold" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/current-sponsors" className="text-white hover:text-blue-200 font-semibold" onClick={() => setIsOpen(false)}>Current Sponsors</Link>
            </li>
            <li>
              <Link href="/potential-sponsors" className="text-white hover:text-blue-200 font-semibold" onClick={() => setIsOpen(false)}>Potential Sponsors</Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-blue-200 font-semibold pr-4" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </li>
          </ul>
        )}
      </nav>
    );
}
