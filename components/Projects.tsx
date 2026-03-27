'use client'

import { useState } from 'react'
import Image from 'next/image'
import Reveal from './Reveal'
import { projects } from '@/lib/data'

const tabs = [
  { label: 'All Projects', value: 'all' },
  { label: 'Design', value: 'design' },
  { label: 'Development', value: 'development' },
  { label: 'SaaS', value: 'saas' },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')

  const filtered =
    activeTab === 'all' ? projects : projects.filter((p) => p.tags.includes(activeTab))

  return (
    <section id="projects" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal tag="span" className="text-accent font-mono text-sm tracking-widest uppercase">
            Projects
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">Selected Work</h2>
          </Reveal>
        </div>

        {/* Tabs */}
        <Reveal delay={2} className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`tab-btn ${activeTab === tab.value ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <article
              key={project.id}
              className={`project-card rounded-2xl overflow-hidden group reveal reveal-delay-${i % 4} active`}
            >
              <div className="aspect-video overflow-hidden bg-surface relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="project-image object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-accent font-mono">{project.year}</span>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted px-2 py-1 rounded"
                        style={{ background: 'var(--surface)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
