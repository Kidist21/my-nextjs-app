import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
    <nav className="flex justify-center space-x-6">
      <Link href="/" className="hover:text-gray-400">Home</Link>
      <Link href="/about" className="hover:text-gray-400">About</Link>
      <Link href="/portfolio" className="hover:text-gray-400">Portfolio</Link>
      <Link href="/dynamic-portfolio" className="hover:text-gray-400">Dynamic Portfolio</Link>
      <Link href="/blog" className="hover:text-gray-400">Blog</Link>
      <Link href="/contact" className="hover:text-gray-400">Contact</Link>
    </nav>
  </header>
  )
}

export default Header