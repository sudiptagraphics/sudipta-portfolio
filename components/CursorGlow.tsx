'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || window.innerWidth < 768) return

    const glow = glowRef.current
    if (!glow) return

    let mouseX = 0, mouseY = 0
    let currentX = 0, currentY = 0
    let animId: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1
      currentY += (mouseY - currentY) * 0.1
      glow.style.left = currentX + 'px'
      glow.style.top = currentY + 'px'
      animId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" />
}
