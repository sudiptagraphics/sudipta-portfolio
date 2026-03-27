'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLinkClick = () => setMobileOpen(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-border"
        style={{ backgroundColor: 'rgba(10,10,11,0.8)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="#" className="font-display font-bold text-xl tracking-tight">
            <span className="text-accent">SM</span>
            <span className="text-fg">.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="nav-link font-medium text-sm">About</a>
            <a href="#experience" className="nav-link font-medium text-sm">Experience</a>
            <a href="#projects" className="nav-link font-medium text-sm">Projects</a>
            <a href="#skills" className="nav-link font-medium text-sm">Skills</a>
            <a href="#contact" className="btn-primary text-sm">Let&apos;s Talk</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: 'rgba(10,10,11,0.95)', backdropFilter: 'blur(20px)' }}>
          <a href="#about" onClick={handleLinkClick} className="text-2xl font-display font-semibold hover:text-accent transition-colors">About</a>
          <a href="#experience" onClick={handleLinkClick} className="text-2xl font-display font-semibold hover:text-accent transition-colors">Experience</a>
          <a href="#projects" onClick={handleLinkClick} className="text-2xl font-display font-semibold hover:text-accent transition-colors">Projects</a>
          <a href="#skills" onClick={handleLinkClick} className="text-2xl font-display font-semibold hover:text-accent transition-colors">Skills</a>
          <a href="#contact" onClick={handleLinkClick} className="btn-primary">Let&apos;s Talk</a>
        </div>
      )}
    </>
  )
}
