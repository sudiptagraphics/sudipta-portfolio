import Reveal from './Reveal'
import { experiences } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="relative py-32" style={{ background: 'rgba(26,26,29,0.5)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal tag="span" className="text-accent font-mono text-sm tracking-widest uppercase">
            Experience
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              11 Years of Growth
            </h2>
          </Reveal>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, i) => (
            <Reveal key={exp.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4} className="timeline-item">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{exp.title}</h3>
                    <p className="text-accent">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted px-3 py-1 rounded-full"
                    style={{ background: 'var(--surface)' }}>
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
